import {Component, OnInit, ViewChild, NgModule, ViewContainerRef, EventEmitter, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CalendarService} from './calendar.service';
import * as moment from 'moment';
import {EventDialogComponent} from './dialogs/event-dialog/event-dialog.component';
import {DragDialogComponent} from './dialogs/drag-dialog/drag-dialog.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})

export class CalendarComponent implements OnInit {
  @ViewChild('eventDialog') eventDialog: EventDialogComponent;
  @ViewChild('dragDialog') dragDialog: DragDialogComponent;
  // Data
  calendarOptions: Object;
  availableViews = ['day', 'week', 'month'];
  currentView = 'month';
  dragStartDate = '';
  public calendarView = null;
  calendar = null;
  currentMonthShort = null;
  events = [];

  constructor(translate: TranslateService, private calendarService: CalendarService, private viewContainerRef: ViewContainerRef) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
    const me = this;

    this.calendarService.getData().subscribe(
      data => {
        if (data) {
          me.events = data;
          me.initCalendar();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  initCalendar() {
    const me = this;
    this.calendarOptions = {
      height: '100%',
      editable: true,
      droppable: true,
      eventLimit: true,
      businessHours: true,
      buttons: false,
      eventRender: function (event, element) {
        if (event.description) {
          element.append('<span class="fc-description">' + event.description + '</span>');
        }
      },
      viewRender: function (view) {
        // console.log(view);
        me.calendarView = view;
        me.calendar = view.calendar;
        // console.log(this.calendar);
        me.currentMonthShort = me.calendar.getDate().format('MMM');
      },
      selectable: true,
      header: '',
      // header:{
      //   left: 'month basicWeek basicDay agendaWeek agendaDay',
      //   center: 'title',
      //   right: 'today prev,next'
      // },
      select: this.addNewEvent.bind(this),
      eventClick: this.editCurrentEvent.bind(this),
      eventDragStart: this.catchDragStart.bind(this),
      eventDrop: this.showDragDialog.bind(this),
      // eventResize: $scope.alertOnResize
      events: this.events
    };
  }

  next() {
    // console.log(this.calendar);
    this.calendar.next();
  }

  prev() {
    this.calendar.prev();
  }

  addNewEvent(startDate, endDate) {
    if (!startDate) {
      startDate = moment();
      endDate = moment().add(1, 'd');
    }
    this.showEventDialog({start: startDate, end: endDate});
  }

  editCurrentEvent(event) {
    this.showEventDialog(event);
  }

  private showEventDialog(event) {
    console.log(event);
    this.eventDialog.open(event);
  }

  catchDragStart(event, delta) {
    const me = this;
    console.log('start drag');
    this.dragStartDate = event.start.format();
    // $translate(['CALENDAR.EVENT_MOVE_MSG_1', 'CALENDAR.EVENT_MOVE_MSG_2']).then(function (translations) {
    // me.dragMessage += translations['CALENDAR.EVENT_MOVE_MSG_1']
    // + event.title + translations['CALENDAR.EVENT_MOVE_MSG_2'] + event.start.format();
    // });
  }

  showDragDialog(event, delta, revertFunc) {
    console.log('drag');
    this.dragDialog.open(event, this.dragStartDate);
    // $translate(['CALENDAR.EVENT_MOVE_MSG_3']).then(function (translations) {
    //
    //   console.log(revertFunc);
    //
    //   vm.dragMessage += translations['CALENDAR.EVENT_MOVE_MSG_3'] + event.start.format() + " ?";
    //
    //   $uibModal.open({
    //     templateUrl: 'app/main/apps/calendar/dialogs/drag-dialog/drag-dialog.html',
    //     controller: 'DragDialogController',
    //     controllerAs: 'vm',
    //     size: 'md',
    //     resolve: {
    //       entry: {text: vm.dragMessage}
    //     }
    //   }).result.then(function () {
    //     vm.dragMessage = "";
    //   }, function () {
    //     vm.dragMessage = "";
    //     revertFunc();
    //   });
    // });
  }

  onClosed(event) {
    console.log(event);
  }


}
