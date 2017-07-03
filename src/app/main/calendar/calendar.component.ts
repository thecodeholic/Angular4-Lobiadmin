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
        me.calendarView = view;
        me.calendar = view.calendar;
        me.currentMonthShort = me.calendar.getDate().format('MMM');
      },
      selectable: true,
      header: '',
      select: me.addNewEvent.bind(this),
      eventClick: me.editCurrentEvent.bind(this),
      eventDragStart: me.catchDragStart.bind(this),
      eventDrop: me.showDragDialog.bind(this),
      // eventResize: $scope.alertOnResize
      events: me.events
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
    this.showEventDialog({start: startDate, end: endDate}, 'add');
  }

  editCurrentEvent(event) {
    this.showEventDialog(event, 'edit');
  }

  private showEventDialog(event, action) {
    console.log(event);
    this.eventDialog.open(event, action);
  }

  catchDragStart(event, delta) {
    const me = this;
    console.log('start drag');
    this.dragStartDate = event.start.format();
  }

  showDragDialog(event, delta, revertFunc) {
    console.log('drag');
    this.dragDialog.open(event, this.dragStartDate, revertFunc);
  }

  onClosed(response) {
    const me = this;
    if (response.dialog === 'event') {
      switch (response.action) {
        case 'add':
          me.events.push(response.event);
          console.log(response.event);
          // me.calendar.renderEvent(response.event, true);
          break;
        case 'edit':
          for (let i = 0; i < me.events.length; i++) {
            if (response.event.id === me.events[i].id) {
              me.events[i] = response.event;
              console.log(me.events[i]);
              break;
            }
          }
          break;
        case 'delete':
          for (let i = 0; i < me.events.length; i++) {
            if (response.event.id === me.events[i].id) {
              me.events.splice(i, 1);
              break;
            }
          }
          break;
        default:
          break;
      }
    } else {
      if (response.action === 'cancel') {
        response.revertFunc();
      } else {
        for (let i = 0; i < me.events.length; i++) {
          if (response.event.id === me.events[i].id) {
             me.events[i] = response.event;
            break;
          }
        }
      }
    }
    this.calendar.removeEventSource(this.events);
    this.calendar.addEventSource(this.events);
    this.calendar.refetchEvents(this.events);
  }


}
