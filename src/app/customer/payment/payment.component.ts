import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminmodule } from 'src/app/module/adminmodule';
import { customer } from 'src/app/module/customer';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  id:any;
  name:any;
  paymentCard = true;
  successMessage:string='';
  customerlist:any;
  customer1:customer[]|undefined;
  cus:any;
  details:any;
  customerId:any;
  responseData: any;
  datas:any;
  cardExpiryDate:any;
  cardholderName:any;
  cardNumber:any;
  cvv:any;
  private baseUrl = 'http://localhost:9999';
constructor(private eService:ProjectserviceService, private http:HttpClient,private router: Router)
{
  let customer:any = localStorage.getItem("userData");
  console.log("Working");
  console.log(customer);
  this.http.post(`${this.baseUrl}/paydet`, customer).subscribe(
    (response: any) => {
      console.log('Login successful:', response);
      this.responseData = response;
      // Successful login, navigate to the module page
      console.log("Work");
      console.log(response);
      this.router.navigate(['/payment']);
    },
    (error: any) => {
      console.error('Login failed:', error);
      // Handle login error, e.g., display an error message
    }
  ); 
}
onSubmit() {

  let customer:any = localStorage.getItem("userData");
  console.log(customer);
  this.http.post(`${this.baseUrl}/paid`, customer).subscribe(
    (response: any) => {
      console.log('Deleted successful:', response);
      // Successful login, navigate to the module page
      this.http.post(`${this.baseUrl}/admin`, customer).subscribe(
        (data: any) => {
          console.log('Admin successful:', data);
          const datas:customer={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,currentbill:"0",previousbill:"0",balance:"0",status:"Paid",type:data.type}
          console.log(datas);
          this.http.post(`${this.baseUrl}/update`, datas).subscribe(
            (response1: any) => {
              console.log('update successful:', response1);
            }
          );
        }
      );
      this.router.navigate(['/display']);
    },
    (error: any) => {
      console.error('Delete and Update failed:', error);
      // Handle login error, e.g., display an error message
    }
  );
}

paymail():void{
  let customer:any = localStorage.getItem("userData");
  console.log(customer);
  this.eService.paymail(customer).subscribe(response => {
    console.log(response); 
  });
}

submitAndHandleIssues() {
  let customer: any = localStorage.getItem('userData');
  this.onSubmit(); // Call the onSubmit method
  this.paymail(); // Call the issues method
}
}

