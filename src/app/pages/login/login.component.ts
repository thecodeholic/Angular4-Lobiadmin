import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import 'style-loader!./login.scss';

import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'login',
  templateUrl: './login.html',
})

export class Login {

  public form: FormGroup;
  public errors = [];
  public identity: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.form = fb.group({
      'identity': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.identity = this.form.controls['identity'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');
       this.authenticationService.login(values).subscribe(
           data => {
             if(data === true){
               this.router.navigate(['/pages']);
             }else{
                this.errors = data;
             }
           },
           error => {
             console.log(error);
           });
       return;
    }
  }
}
