import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent as MyCalendar} from './calendar.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateParser} from '@ngx-translate/core';
import {CalendarComponent} from 'angular2-fullcalendar/src/calendar/calendar';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http} from '@angular/http';
import {CalendarService} from './calendar.service';
import {MomentModule} from 'angular2-moment';
import {EventDialogComponent} from './dialogs/event-dialog/event-dialog.component';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Daterangepicker} from 'ng2-daterangepicker';
import {DragDialogComponent} from './dialogs/drag-dialog/drag-dialog.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/src/app/main/calendar/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    MomentModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    Daterangepicker,
  ],
  declarations: [MyCalendar, CalendarComponent, EventDialogComponent, DragDialogComponent],
  providers: [
    CalendarService,
  ],
})
export class CalendarModule { }
