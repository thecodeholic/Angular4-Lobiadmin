import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {Login} from './login.component';
import {routing} from './login.routing';
import {AuthenticationService} from '../../services/authentication.service';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing
    ],
    declarations: [
        Login
    ],
    providers: [
        AuthenticationService
    ]
})
export class LoginModule {

}
