/**
 * Created by gio on 6/12/17.
 */
import {TranslateService} from '@ngx-translate/core';
import {Component, Input, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var Lobibox: any;

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.less']
})
export class EventDialogComponent {
  @ViewChild('childModal') public childModal: ModalDirective;

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
  options: object;

  constructor(fb: FormBuilder) {
  }

  init(Event) {
    this.isEdit = Event && !!Event.title;
    this.eventStyles = ['event-primary', 'event-success', 'event-danger', 'event-info', 'event-warning', 'event-gray', 'event-cyan', 'event-purple', 'event-pink'];
    this.eventDate = {startDate: Event.start, endDate: Event.end};
    this.event = this.isEdit ? Event : {
      id: Math.round(Math.random() * 1000000),
      className: ['event-primary'],
      start: this.eventDate.startDate,
      end: this.eventDate.endDate,
      allDay: false,
      title: ''
    };
    this.event.files = this.event.files || [];
    this.options = {
      autoUpdateInput: true,
      timePicker: true,
      locale: {format: 'YYYY-MM-DD h:mm A'}
    };

    console.log('event-dialog init');
  }

  open(event) {
    this.init(event);
    this.childModal.show();
    console.log('open');
  }

  close() {
    this.childModal.hide();
    console.log('close');
  }

  ok() {
    console.log(this.event);
    this.childModal.hide();
  }

  cancel() {
    this.close();
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
    // @todo This code should be tested
    // vm.event.$delete();
    const me = this;
    console.log(Lobibox);
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
