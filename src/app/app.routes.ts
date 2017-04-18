import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';

import { SignupRoutes } from './signup/index';

import { PageRoutes } from './page/index';
import { DashboardRoutes } from './dashboard/index';
import { LoggedInGuard } from './logged-in.guard';
import { ProviderLoggedInGuard } from './provider-logged-in.guard';

import { PageComponent } from './page/index';
import { LoginComponent } from './login/index';


import { ForgotPasswordComponent } from './forgot-password/index';


import { ResetPasswordComponent } from './reset-password/index';


import { SignupComponent } from './signup/index';

import { DashboardComponent } from './dashboard/index';

import { CouponComponent } from './dashboard/coupons/index';
import { ProfileComponent } from './dashboard/profile/index';

import { HelpComponent } from './page/help/index';
import { HomeComponent } from './page/home/index';
import { DHomeComponent } from './dashboard/home/index';

import { AboutComponent } from './page/about/index';
import { PrivacyComponent } from './page/privacy/index';
import { LocationComponent } from './dashboard/location/index';
import { CouponViewComponent } from './dashboard/coupons/coupon-view/index';
import { OrderConfirmComponent } from './dashboard/coupons/order-confirm/index';
import { TermConditionComponent } from './dashboard/coupons/terms-conditions/index';
import { JoinFriendComponent } from './dashboard/coupons/join-friend/index';
import { PreviousCouponComponent } from './dashboard/previous-coupons/index';
import { CouponPackageViewComponent } from './dashboard/coupons/coupon-package-view/index';
import { CouponCartComponent } from './dashboard/coupons/coupon-cart/index';
import { CouponDetailsComponent } from './dashboard/coupons/coupon-details/index';
import { SendAnotherEmailComponent } from './dashboard/coupons/send-another-email/index';
import { ThankYouComponent } from './dashboard/coupons/thank-you/index';


import { DirectionComponent } from './dashboard/direction/index';
import { ContactUsComponent } from './contact-us/index';
import { FeedbackComponent } from './dashboard/feedback/index';
import { QrcodeComponent } from './dashboard/qrcode/index';
import { ActiveCouponComponent } from './dashboard/active-coupons/index';

export const routes: Routes = [
	
	{
        path: 'signup', 
        component: SignupComponent
    },
    {
    	path: 'contact-us',	
    	component: ContactUsComponent
  	},
    {
      path: 'login',  
      component: LoginComponent
    },
    {
      path: 'forgot-password',  
      component: ForgotPasswordComponent
    },
  	{
        path: 'reset-password', 
        component: ResetPasswordComponent
    },
	 {
    	path: '',	
    	component: PageComponent,
      children: [
            {
                path: '', 
                component: HomeComponent,
                   
            },
            {
                path: 'help', 
                component: HelpComponent,
                   
            },
            {
                path: 'about', 
                component: AboutComponent,
                   
            },
            {
                path: 'privacy', 
                component: PrivacyComponent,
                   
            }
      ]
  	},
    {
      path: 'dashboard', 
      component: DashboardComponent,
      canActivate: [LoggedInGuard],
      children: [
        {
            path: '', 
            component: DHomeComponent,
               
        },
      	{
      			path: 'profile', 
      			component: ProfileComponent,
               
    		},
        {
            path: 'location', 
            component: LocationComponent,
               
        },
	    	{
      			path: 'coupon', 
      			component: CouponComponent
               
    		},
        {
            path: 'coupon-package-view',
            component: CouponPackageViewComponent
        },
        {
            path: 'coupon-cart',
            component: CouponCartComponent
        },
        {
            path: 'coupon-details',
            component: CouponDetailsComponent
        },
        {
            path: 'order-confirm', 
            component: OrderConfirmComponent,
               
        },
        {
            path: 'send-another-email', 
            component: SendAnotherEmailComponent,
               
        },
        {
            path: 'thank-you', 
            component: ThankYouComponent,
               
        },
        {
            path: 'coupon-view', 
            component: CouponViewComponent,
        },
        {
            path: 'direction', 
            component: DirectionComponent,
        },
        {
            path: 'terms-conditions', 
            component: TermConditionComponent,
        },
        {
            path: 'join-friend', 
            component: JoinFriendComponent,
        },
        {
            path: 'previous-coupons', 
            component: PreviousCouponComponent,
        },
        {
            path: 'feedback/:id', 
            component: FeedbackComponent,
        },
        {
            path: 'qr-code/:code', 
            component: QrcodeComponent,
        },
        {
            path: 'active-coupons', 
            component: ActiveCouponComponent,
        }
    	]
    }
];
