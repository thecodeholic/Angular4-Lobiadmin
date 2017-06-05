import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../app.settings';
import {HttpService} from './http.service';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpService) {
    }

    login(data) {
        return this.http.post(AppSettings.getUrl() + '/api/v1/guest/login', data)
            .map((response: Response) => {
                const res = response.json();
                if (res.success) {
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    return true;
                }else {
                   return res.errors;
                }
            });
    }

    changePassword(data) {
        return this.http.post(AppSettings.getUrl() + '/api/v1/user/change-password', data)
            .map((response: Response) => {
                return response.json();
            });
    }

    logout() {
        return this.http.post(AppSettings.getUrl() + '/api/v1/user/logout', {})
            .map((response: Response) => {
                localStorage.removeItem('currentUser');
                return response;
            });
    }

    RequestPasswordReset(data) {
        return this.http.post(AppSettings.getUrl() + '/api/v1/guest/login', data)
            .map((response: Response) => {
                const user = response.json();
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }
            });
    }

}
