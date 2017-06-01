import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';

import { SignupModule } from './signup/signup.module';

import { ForgotPasswordModule } from './forgot-password/forgotPassword.module';

import { ResetPasswordModule } from './reset-password/resetPassword.module';


import { DashboardModule } from './dashboard/dashboard.module';

import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';
import { CouponViewModule } from './dashboard/coupons/coupon-view/coupon-view.module';
import { ContactUsModule } from './contact-us/contact-us.module';

import {FrontTopNavComponent} from './shared/index';
import {FooterComponent} from './shared/index';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AgmCoreModule } from "angular2-google-maps/core";
import { UserService } from './user.service';
import { LoggedInGuard } from './logged-in.guard';
import { ProviderLoggedInGuard } from './provider-logged-in.guard';
import { ExtendedHttpService } from './extended-http.service';


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
		FormsModule,
		ReactiveFormsModule,
		DashboardModule,
		ForgotPasswordModule,
		ResetPasswordModule,
		PageModule,
		CouponViewModule,
		SignupModule,
		ContactUsModule,
		SharedModule.forRoot(),
		MaterialModule.forRoot(),
		FacebookModule.forRoot(),
		ToasterModule
  ],
  declarations: [AppComponent, FrontTopNavComponent, FooterComponent],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [UserService, LoggedInGuard, ProviderLoggedInGuard/*, { provide: Http, useClass: ExtendedHttpService }*/]
})
export class AppModule { }
