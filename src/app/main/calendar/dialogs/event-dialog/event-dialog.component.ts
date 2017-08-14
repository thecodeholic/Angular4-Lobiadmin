/**
 * Created by gio on 6/12/17.
 */
import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {DaterangePickerComponent} from 'ng2-daterangepicker';
import {EventStruct} from '../../components/event.component';

declare const Lobibox: any;


@Component({
  selector: 'app-event-modal',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.less'],
  providers: [EventStruct]
})
export class EventDialogComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  @Output()
  closed: EventEmitter<object> = new EventEmitter();

  // form
  public titleTouched: boolean;
  public currentAction: string;
  private eventStyles = [];
  public event = null;

  constructor(public Event: EventStruct) {
    this.event = this.Event.event;
  }


  public selectedDate(value: any) {
    this.event.start = value.start;
    this.event.end = value.end;
  }

  init(ev, action) {

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


    if (action === 'edit') {
      this.titleTouched = true;
      this.event = {
        id: ev.id,
        className: ev.className,
        start: ev.start,
        end: ev.end,
        allDay: ev.allDay,
        title: ev.title,
        description: ev.description,
        files: ev.files || []
      };
    } else {
      this.titleTouched = false;
      this.event = {
        id: Math.round(Math.random() * 1000000),
        className: ['event-primary'],
        start: ev.start,
        end: ev.end,
        allDay: ev.allDay,
        title: '',
        description: '',
        files: []
      };
    }

    this.picker.datePicker.autoUpdateInput = true;
    this.picker.datePicker.singleDatePicker = false;
    this.picker.datePicker.locale.format = 'YYYY-MM-DD';
    this.picker.datePicker.setStartDate(this.event.start);
    this.picker.datePicker.setEndDate(this.event.end);
    this.checkAllDayState();

    this.currentAction = action;
  }

  open(ev, action) {
    this.init(ev, action);
    this.childModal.show();
  }

  close(action = this.currentAction) {
    this.childModal.hide();
    this.closed.emit({event: this.event, action: action, dialog: 'event'});
  }

  ok() {
    this.close();
  }

  cancel() {
    this.childModal.hide();
  }

  addAttachments(e) {
    console.log(e);
    const inputEl = e.target;
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
          me.close('delete');
        }
      }
    });
  }

  titleTouchedFn() {
    this.titleTouched = true;
  }

  checkAllDayState() {
    if (this.event.allDay === true) {
      this.picker.datePicker.timePicker = true;
    } else {
      this.picker.datePicker.timePicker = false;
    }
  }
}
