import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { ProviderLoginModule } from './providerlogin/providerlogin.module';

import { SignupModule } from './signup/signup.module';
import { ProviderSignupModule } from './providersignup/providersignup.module';

import { ForgotPasswordModule } from './forgot-password/forgotPassword.module';
import { ProviderForgotPasswordModule } from './provider-forgot-password/providerforgotPassword.module';

import { ResetPasswordModule } from './reset-password/resetPassword.module';
import { ProviderResetPasswordModule } from './provider-reset-password/providerresetPassword.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';
import { CouponViewModule } from './dashboard/coupons/coupon-view/coupon-view.module';

import {FrontTopNavComponent} from './shared/index';
import {FooterComponent} from './shared/index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  imports: [
    	BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		AgmCoreModule.forRoot({
          apiKey: "AIzaSyAGMdOZPvWC-k__DNkAk9aGkPZ8x7OIGeY",
          libraries: ["places"]
        }),
		LoginModule,
		ProviderLoginModule,
		FormsModule,
		ReactiveFormsModule,
		DashboardModule,
		ForgotPasswordModule,
		ProviderForgotPasswordModule,
		ResetPasswordModule,
		ProviderResetPasswordModule,
		PageModule,
		CouponViewModule,
		SignupModule,
		ProviderSignupModule,
		SharedModule.forRoot(),
		MaterialModule.forRoot(),
		ToasterModule
  ],
  declarations: [AppComponent, FrontTopNavComponent, FooterComponent],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
