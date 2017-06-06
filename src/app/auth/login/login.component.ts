import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  formType = 'login';

  public form: FormGroup;
  public errors = [];
  public identity: AbstractControl;
  public password: AbstractControl;
  public remember_me;
  public submitted = false;

  constructor(fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router, translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.form = fb.group({
      'identity': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'remember_me': ['', Validators.compose([Validators.required])],
    });

    this.identity = this.form.controls['identity'];
    this.password = this.form.controls['password'];
    this.remember_me = this.form.controls['remember_me'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');
      this.authenticationService.login(values).subscribe(
        data => {
          if (data === true) {
            this.router.navigate(['/main']);
          } else {
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

