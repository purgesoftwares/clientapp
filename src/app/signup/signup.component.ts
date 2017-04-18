import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import * as globals from './../globals';
/**
*	This class represents the lazy loaded SignupComponent.
*/

declare const FB:any;

declare const gapi: any;

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.component.html'
})

export class SignupComponent { 
	model: any= {};
	user: any= {};
	guser: any= {};
	objThis: any= {};
	globals: any= {};
	message: any= {};
	mess = false;
	loading = false;

	private toasterService: ToasterService;

	constructor( private http : Http,
				private router: Router, toasterService: ToasterService ) {
		this.toasterService = toasterService;
		this.globals = globals;
		FB.init({
            appId      : '379633659081437',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
	}

public auth2: any;
  	public googleInit() {
	    let that = this;
	    gapi.load('auth2', function () {
	      that.auth2 = gapi.auth2.init({
	        client_id: '1088884193573-2pef80d27eqn3htfdk4mds83glmsar3c.apps.googleusercontent.com',
	        cookiepolicy: 'single_host_origin',
	        scope: 'profile email'
	      });
	      that.attachSignin(document.getElementById('googleBtn'));
	    });
	  }
	  
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

      	console.log(googleUser);
      	console.log(googleUser);
        let profile = googleUser.getBasicProfile();
        that.guser = { "id" : profile.getId(), "name" : profile.getName(), "email" : profile.getEmail() };
        that.googlesignup();
        /*console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());*/
        //YOUR CODE HERE


      }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

ngAfterViewInit(){
      this.googleInit();
}

googlesignup() {

		this.loading = true;
		this.model = this.guser;
		
		this.model.email = this.model.email.toLowerCase();

		this.http.post('http://54.161.216.233:8090/api/public/customer/googlesignup', this.model)
			.map((res:Response) => res.text())
			.subscribe(
			    data => { 
			    		
			    	if(data) {
			    		
			    		this.toasterService.pop('success', 'Success',
			    		 'Your account successfully created!');
			    		localStorage.setItem('access_token', data);
			    		window.location.href = "/dashboard";
				    	this.router.navigate(['/dashboard']);
						
			    	} else {
			    		this.mess= true;
				    	this.message= 'Value is incorrect';
				    	this.toasterService.pop('error', 'Invalid',
			    		 this.message);
				    	this.loading = false;
				    }
				},
			    error => {console.log(error);
				    this.mess= true;
				    this.message= 'Some Error! Please Try After Some Time '; 
				    this.toasterService.pop('error', 'Error',
			    		 this.message);
				    this.loading = false;
				}
			 );
	}


	onFacebookLoginClick() {
		/*FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
*/
		var objThis = this;

        FB.login((result: any) => {
		    //this.loged = true;
		    //this.token = result;
		    FB.getLoginStatus(response => {
	            objThis.statusChangeCallback(response);
	        });
	        
		  }, { scope: 'email' });
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
        	console.log(resp);
        	this.me();
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            console.log(resp);
        }
    };

    ngOnInit() {
       /* FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });*/
    }

	fbsignup() {

		this.loading = true;
		this.model = this.user;
		
		this.model.email = this.model.email.toLowerCase();

		this.http.post('http://54.161.216.233:8090/api/public/customer/fbsignup', this.model)
			.map((res:Response) => res.text())
			.subscribe(
			    data => { 
			    		
			    	if(data) {
			    		
			    		this.toasterService.pop('success', 'Success',
			    		 'Your account successfully created!');
			    		localStorage.setItem('access_token', data);
			    		window.location.href = "/dashboard";
				    	this.router.navigate(['/dashboard']);
						
			    	} else {
			    		this.mess= true;
				    	this.message= 'Value is incorrect';
				    	this.toasterService.pop('error', 'Invalid',
			    		 this.message);
				    	this.loading = false;
				    }
				},
			    error => {console.log(error);
				    this.mess= true;
				    this.message= 'Some Error! Please Try After Some Time '; 
				    this.toasterService.pop('error', 'Error',
			    		 this.message);
				    this.loading = false;
				}
			 );
	}


    me() {
    	var objThis = this;
	    FB.api('/me?fields=id,name,first_name,email,gender,picture.width(150).height(150),age_range',
	        function(result) {
	        	
	            if (result && !result.error) {
	                objThis.user = result;
	            
	                objThis.fbsignup();
	                //objThis.dlogin();
	            } else {
	                console.log(result.error);
	            }
	        });
	}


	signup() {

		this.loading = true;
		
		this.model.email = this.model.email.toLowerCase();
		
		this.http.post('http://54.161.216.233:8090/api/public/customer/signup', this.model)
			//.map((res:Response) => res.text())
			.subscribe(
			    data => { 

			    	if(data.status == 200) {
			    		var datamodel = JSON.stringify(eval("(" + data.text() + ")"));
			    		this.toasterService.pop('success', 'Success',
			    		 'Your account successfully created! Login to access');
			    		//localStorage.setItem('access_token', data);
				    	this.router.navigate(['/login']);
			    	} else {this.mess= true;
				    	this.message= 'Value is incorrect';
				    	this.toasterService.pop('error', 'Invalid',
			    		 this.message);
				    	this.loading = false;}},
			    error => {console.log(error);
				    this.mess= true;
				    this.message= 'Some Error! Please Try After Some Time '; 
				    this.toasterService.pop('error', 'Error',
			    		 this.message);
				    this.loading = false;
				}
			 );
	}
}
