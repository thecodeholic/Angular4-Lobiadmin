import {Injectable} from '@angular/core';
import {HttpService} from '../../services/http.service';
import 'rxjs/add/operator/map';


@Injectable()
export class CalendarService {

  constructor(private http: HttpService) {
  }

  getData() {
    return this.http.get('src/app/main/calendar/data/events.json').map((response: any) => {
                 return response.json();
           });
  }

}
