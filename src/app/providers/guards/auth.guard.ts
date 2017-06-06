/**
 * Created by koco on 2/8/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        // Check to see if a user has a valid JWT
        if (localStorage.getItem('currentUser') !== null) {
            // If they do, return true and allow the user to load the home component
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/auth/login']);
        return false;
    }
}