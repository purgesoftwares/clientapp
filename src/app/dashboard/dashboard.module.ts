import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from "angular2-google-maps/core";

import { DHomeModule } from './home/home.module';

import { UserModule } from './users/user.module';
import { LocationModule } from './location/location.module';


import { CouponModule } from './coupons/coupon.module';
import { ProfileModule } from './profile/profile.module';
import { OrderConfirmModule } from './coupons/order-confirm/order-confirm.module';
import { TermConditionModule } from './coupons/terms-conditions/terms-conditions.module';
import { JoinFriendModule } from './coupons/join-friend/joinFriend.module';
import { PreviousCouponModule } from './previous-coupons/previousCoupon.module';
import { CouponCartModule } from './coupons/coupon-cart/coupon-cart.module';
import { CouponDetailsModule } from './coupons/coupon-details/coupon-details.module';
import { SendAnotherEmailModule } from './coupons/send-another-email/send-another-email.module';
import { ThankYouModule } from './coupons/thank-you/thank-you.module';
import { DirectionModule } from './direction/direction.module';
import { FeedbackModule } from './feedback/feedback.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { ActiveCouponModule } from './active-coupons/activeCoupon.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        AgmCoreModule.forRoot({
          apiKey: "AIzaSyAGMdOZPvWC-k__DNkAk9aGkPZ8x7OIGeY",
          libraries: ["places"]
        }),
    	DHomeModule,
        UserModule,
        LocationModule,
        OrderConfirmModule,
        TermConditionModule,
        JoinFriendModule,
        CouponModule,
        ProfileModule,
        PreviousCouponModule,
        CouponCartModule,
        CouponDetailsModule,
        SendAnotherEmailModule,
        ThankYouModule,
        DirectionModule,
        FeedbackModule,
        QrcodeModule,
        ActiveCouponModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
