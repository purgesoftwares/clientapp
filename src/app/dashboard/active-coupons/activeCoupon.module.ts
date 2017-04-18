import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ActiveCouponComponent } from './activeCoupon.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ActiveCouponComponent ],
    exports: [ActiveCouponComponent]
})

export class ActiveCouponModule { }
