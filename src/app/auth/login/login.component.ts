import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {EqualPasswordsValidator} from '../../validators/equalPasswords.validator';
import {EmailValidator} from '../../validators/email.validator';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  formType = 'signup';

  // login
  public form: FormGroup;
  public identity: AbstractControl;
  public password: AbstractControl;
  public remember_me;

  // signup
  public signupForm: FormGroup;
  public passwords: FormGroup;
  public repeatPassword: AbstractControl;
  public password_reg: AbstractControl;
  public firstname: AbstractControl;
  public lastname: AbstractControl;
  public username: AbstractControl;
  public email: AbstractControl;

  // reset password
  public resetForm: FormGroup;
  public identity_reset: AbstractControl;

  constructor(fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router, translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    // document.querySelector('body').classList.add('auth-login');

    this.form = fb.group({
      'identity': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'remember_me': ['', Validators.compose([Validators.maxLength(1)])],
    });

    this.signupForm = fb.group({
      'firstname': ['', Validators.compose([Validators.maxLength(128)])],
      'lastname': ['', Validators.compose([Validators.maxLength(255)])],
      'username': ['', Validators.compose([Validators.required, Validators.maxLength(128)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.resetForm = fb.group({
      'identity': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.identity = this.form.controls['identity'];
    this.password = this.form.controls['password'];
    this.remember_me = this.form.controls['remember_me'];

    this.firstname = this.signupForm.controls['firstname'];
    this.lastname = this.signupForm.controls['lastname'];
    this.username = this.signupForm.controls['username'];
    this.email = this.signupForm.controls['email'];
    this.passwords = <FormGroup> this.signupForm.controls['passwords'];
    this.password_reg = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];

    this.identity_reset = this.resetForm.controls['identity'];
  }

  public login(values: Object): void {
    if (this.form.valid) {
      // your code here
      this.authenticationService.login(values).subscribe(
        data => {
          if (data === true) {
            this.router.navigate(['/main']);
          }
        },
        error => {
          console.log(error);
        });
      return;
    }
  }

  public signup(values: Object): void {
    if (this.signupForm.valid) {
      // your code here
    }
  }

  public reset(values: Object): void {
    if (this.resetForm.valid) {
      // your code here
    }
  }

}

