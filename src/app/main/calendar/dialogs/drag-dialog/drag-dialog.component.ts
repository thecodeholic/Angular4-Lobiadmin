/**
 * Created by gio on 6/12/17.
 */
import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-drag-modal',
  templateUrl: './drag-dialog.html',
  styleUrls: ['./drag-dialog.less']
})
export class DragDialogComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  @Output()
  closed: EventEmitter<object> = new EventEmitter();

  public startDate: string;
  public event = {title: '', start: moment()};
  revertFunc: object;

  constructor() {

  }

  init(event, startDate) {
    this.startDate = startDate;
    this.event = event;
  }

  open(event, startDate, revertFunc) {
    this.init(event, startDate);
    this.childModal.show();
    this.revertFunc = revertFunc;
    console.log('open');
  }

  close(action) {
    this.childModal.hide();
    this.closed.emit({event: this.event, action: action, dialog: 'drag', revertFunc: this.revertFunc});
    console.log('close');
  }

  ok() {
    this.close('ok');
  }

  cancel() {
    this.close('cancel');
  }
}
