import {isDevMode} from '@angular/core';
export class AppConfig {
    public static getApiUrl(endPoint: string) {
        if (isDevMode()) {
            return 'http://spink-server.dev/api/' + endPoint.replace(/^\//, '');
        } else {
            return 'http://spink-server.prod/api/' + endPoint.replace(/^\//, '');
        }
    }
}
