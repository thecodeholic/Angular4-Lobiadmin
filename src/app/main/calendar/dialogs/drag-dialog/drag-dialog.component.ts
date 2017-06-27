/**
 * Created by gio on 6/12/17.
 */
import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-drag-modal',
  templateUrl: './drag-dialog.html',
  styleUrls: ['./drag-dialog.less']
})
export class DragDialogComponent {
  @ViewChild('childModal') public childModal: ModalDirective;

  public startDate: string;
  public event = {title: '', start: moment()};


  constructor() {

  }

  init(event, startDate) {
    this.startDate = startDate;
    this.event = event;
  }

  open(event, startDate) {
    this.init(event, startDate);
    this.childModal.show();
    console.log('open');
  }

  close() {
    this.childModal.hide();
    console.log('close');
  }

  ok() {
    this.childModal.hide();
  }

  cancel() {
    this.close();
  }
}
