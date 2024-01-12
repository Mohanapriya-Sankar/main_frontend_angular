import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectserviceService } from '../service/projectservice.service';
import { otpmodule } from '../module/otpmodule';
import { Otpvalidation } from '../module/Otpvalidation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  otpSent:boolean=false;
  otpVerified:boolean=false;
  phone:string='';
  // otp:string='';
  sotp:string=''
  username:any;
  otps:string='';
  phoneNumber:string='';

  constructor(private router:Router , private ds:ProjectserviceService,private http: HttpClient )
  {

  }
  private baseUrl = 'http://localhost:9999';
  otp:string='';
  generateOTP(cusform:any) {

    // Extract the phone number from the form

    console.log(cusform.value.phone)
    const otpmodule: otpmodule = {
      username: this.phoneNumber,
      phoneNumber: cusform.value.phone};

      this.http.post(`${this.baseUrl}/mobile`, otpmodule).subscribe(

        (response: any) => {

        // console.log('OTP Verification Response:', response.customer.id);

        // localStorage.setItem("userData",response.customer.id);
  
          console.log('Login successful:', response);
          
          console.log('OTP Verification Response:', response.id);

        localStorage.setItem("userData",response.id);
        localStorage.setItem("previousBill",response.previousbill);
        localStorage.setItem("installmentType",response.type);

          // Successful login, navigate to the module page
  
          // this.router.navigate(['/details']);
          this.ds.sendOtp(otpmodule).subscribe(

            (data: any) => {
              console.log('OTP Sent:',data);
              this.otp = data.otp
            // this.router.navigate(['/otp']);
      
            this.otpSent=true;
      
          });
  
        },
  
        (error: any) => {
  
          console.error('Login failed:', error);
  
          // Handle login error, e.g., display an error message
  
        }
  
      );
  }
  validateOTP(cusform:any)
  {
    // const otpvalidation: Otpvalidation = {
    //   username: this.username,
    //   otpNumber: ''
    // };
    console.log(this.otp);
    console.log(cusform.value.otps);
    // this.sotp=cusform.value.otps;
    if(cusform.value.otps == this.otp){

      // this.router.navigate(['/paymentoptions']);
      this.otpSent=true;
      this.otpVerified=true;
      let Bill:any = localStorage.getItem("previousBill");
      console.log(Bill);
      if(Bill=="0")
      {
      this.router.navigate(['/totalpayment']);
      }
      else{
        this.router.navigate(['/issues']);
      }
    
    }

    else{
      // this.router.navigate(['/otp']);
      console.log('wrong otp');
      this.router.navigate(['/otp']);
      

    }
  }

}
