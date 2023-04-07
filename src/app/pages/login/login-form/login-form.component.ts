import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialLink } from './social.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pt-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {
  authSub?: Subscription;
  constructor(
    private socialAuthService: SocialAuthService,
  ) { }

  socialUser!: SocialUser;
  isLoggedin?: boolean;

  public readonly socialLinks: SocialLink[] = [
    {
      id: 'apple',
      href: '',
      iconUrl: 'assets/pages/login/login-form/icons/apple.svg',
      hint: 'Apple',
      onClick: () => console.log('not implemented')
    },
    {
      id: 'github',
      href: '',
      iconUrl: 'assets/pages/login/login-form/icons/github.svg',
      hint: 'Github',
      onClick: () => console.warn('not implemented')
    },
    {
      id: 'google',
      href: '',
      iconUrl: 'assets/pages/login/login-form/icons/google.svg',
      hint: 'Google',
      onClick: this.googleLogin
    },
    {
      id: 'telegram',
      href: '',
      iconUrl: 'assets/pages/login/login-form/icons/telegram.svg',
      hint: 'Telegram',
      onClick: () => console.warn('not implemented')
    },
  ]

  ngOnDestroy(): void {
    this.authSub?.remove
  }

  ngOnInit(): void {
    this.authSub = this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  textInput: string = '';

  loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
      ],
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(8),
    ]),
    remember: new FormControl(''),
  })

  isShowPassword: boolean = false;

  toggleIsShowPassword = () => {
    this.isShowPassword = !this.isShowPassword;
  }

  submit(e: Event) {
    console.log(this.loginForm.valid);
    console.warn(this.loginForm.value);
  }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  gitHubLogin() {

  }
}
