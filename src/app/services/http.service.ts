/**
 * Created by koco on 2/10/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpService extends Http {

    constructor(backend: XHRBackend, options: RequestOptions) {
        const token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).accessToken : null;
        options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options);
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        const token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).accessToken : null;
        if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = {headers: new Headers()};
            }
            options.headers.set('Authorization', `Bearer ${token}`);
        } else {
            // we have to add the token to the url object
            url.headers.set('Authorization', `Bearer ${token}`);
        }
        return super.request(url, options);
    }

    private catchAuthError (self: HttpService) {
        // we have to pass HttpService's own instance here as `self`
        return (res: Response) => {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return Observable.throw(res);
        };
    }
}