/**
 * Created by gio on 6/12/17.
 */
import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DaterangePickerComponent} from 'ng2-daterangepicker';

declare const Lobibox: any;


@Component({
  selector: 'app-event-modal',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.less']
})
export class EventDialogComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  @Output()
  closed: EventEmitter<object> = new EventEmitter();

  // form
  public Event: any;
  isEdit: boolean;
  eventStyles = [];
  eventDate: any;
  event = {
    id: null,
    className: ['event-primary'],
    start: null,
    end: null,
    allDay: false,
    title: '',
    files: []
  };

  public selectedDate(value: any) {
    this.eventDate.startDate = value.start;
    this.eventDate.endDate = value.end;
  }

  constructor(fb: FormBuilder) {
  }

  init(Event) {
    this.isEdit = Event && !!Event.title;
    this.eventStyles = [
      'event-primary',
      'event-success',
      'event-danger',
      'event-info',
      'event-warning',
      'event-gray',
      'event-cyan',
      'event-purple',
      'event-pink'
    ];
    this.eventDate = {startDate: Event.start, endDate: Event.end};
    this.event = this.isEdit ? Event : {
      id: Math.round(Math.random() * 1000000),
      className: ['event-primary'],
      start: this.eventDate.startDate,
      end: this.eventDate.endDate,
      allDay: false,
      title: ''
    };
    this.picker.datePicker.timePicker = true;
    this.picker.datePicker.autoUpdateInput = true;
    this.picker.datePicker.locale.format = 'YYYY-MM-DD h:mm A';
    this.event.files = this.event.files || [];

    console.log('event-dialog init');
  }

  open(event) {
    this.init(event);
    this.picker.datePicker.setStartDate(this.eventDate.startDate);
    this.picker.datePicker.setEndDate(this.eventDate.endDate);

    this.childModal.show();
    console.log('open');
    return this.childModal;
  }

  close(action) {
    this.childModal.hide();
    this.closed.emit({event: this.event, action: action});
  }

  ok() {
    // console.log(this.event);
    this.close('ok');
  }

  cancel() {
    this.close('cancel');
  }

  addAttachments(event) {
    console.log(event);
    const inputEl = event.target;
    for (let i = 0; i < inputEl.files.length; i++) {
      this.event.files.push(inputEl.files[i]);
    }
  }

  removeAttachment(file) {
    this.event.files.splice(this.event.files.indexOf(file), 1);
  }

  deleteEvent() {
    const me = this;
    // console.log(Lobibox);
    Lobibox.confirm({
      title: 'Deleting event: ' + me.event.title,
      msg: 'Are you sure you want to delete this event?',
      callback: function (lobibox, btn) {
        if (btn === 'yes') {
          // $uibModalInstance.close({
          //   action: 'delete',
          //   event: vm.event
          // });
        }
      }
    });
  }
}
