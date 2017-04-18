import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'
import * as globals from './../../globals'; 

@Component({
	moduleId: module.id,
	selector: 'active-coupon-cmp',
	templateUrl: 'activeCoupon.component.html'
})

export class ActiveCouponComponent {
	coupons;
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;
	isJoinedFriends = false;
	joinedFriends;
	token = localStorage.getItem('access_token');
	latitude = localStorage.getItem('latitude');
	
	private toasterService: ToasterService;

	constructor( private http : Http,
				private router: Router, toasterService: ToasterService ) {
		this.toasterService = toasterService;
	}

	ngOnInit() {
		
		this.http.get(globals.apiSecureUrl + '/user/current-customer?access_token=' + this.token)
  				.map(res => res.json())
  				.catch(e => {
					console.log(e);
		            if (e.status === 401 || e.status === 0) {
		                return Observable.throw('Unauthorized');
		            }
		            // do any other checking for statuses here
		        })
  				.subscribe(
  					data => { if(data.addressId || (this.latitude && this.latitude != "" && this.latitude != null)) {
                  				
                  			} else {
                      			
                      			this.toasterService.pop('error', 'Set Location',
			    		 'Set Location first to check nearby Coupons!');
			    		 		this.router.navigate(['/dashboard/location']);
                  			}},
  					error => { 

  					if(error == "Unauthorized"){
  						
						this.toasterService.pop('error', 'Unauthorized',
						 "Session expired or invalid access.");

						this.router.navigate(['/login']);
            			return false;
					}

					if(error.json().error) {
									this.message = error.json().message;
									this.mess = true;
								}},
  					() => console.log("complete")
  				);


  		var thisObj = this;
		this.http.get('http://54.161.216.233:8090/api/secured/purchased-package/active?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { 

  						if(data.content.length) {
                  				thisObj.coupons= data.content;
                  				this.coupons= data.content;
  								//this = thisObj;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found.";
                  			}},
  					error => { if(error.json().error) {
									this.message = error.json().message;
									this.mess = true;
								}},
  					() => console.log("complete")
  				);
	}

	view(id,couponCode,couponNumber,price,providerId,used,availability, startTime, endTime) {
		
		this.router.navigate(['/dashboard/coupon-view/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used,availability: availability,startTime:startTime, endTime:endTime}})
	}

	viewDetails(id) {
		this.router.navigate(['/dashboard/coupon-details/'],{ queryParams: { id:id}})
	}

	getDigits(num){

		var output = [],
		    sNumber = num.toString();

		for (var i = 0, len = sNumber.length; i < len; i += 1) {
		    output.push(+sNumber.charAt(i));
		}

		return output;
	}

	getLastThree(digits){
		var output = "";

		for (var i = digits.length - 1; i >= 3; i--) {
			output += digits[i].toString();
		}
		return output;
	}
	hash(num:number){

	if(!num)
      	return "";

		return "TOUR"+this.getLastThree(this.getDigits(num));
	}

	/*search(terms: string) {
		if(terms) {
			this.coupons = this.coupons.filter(item => item.couponNumber.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}*/
   
    /*setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.coupons.length, page);
        this.pagedItems = this.coupons.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }*/  
}
