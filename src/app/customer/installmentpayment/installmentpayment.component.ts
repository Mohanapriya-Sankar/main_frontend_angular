import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/module/customer';
import { support } from 'src/app/module/support';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-installmentpayment',
  templateUrl: './installmentpayment.component.html',
  styleUrls: ['./installmentpayment.component.css']
})
export class InstallmentpaymentComponent {

  two:any;
  three:any;
  amount:any;
  responseData:any;
  private baseUrl = 'http://localhost:9999';
  constructor(private eService:ProjectserviceService, private http:HttpClient,private router: Router)
  {}
  threeinstall(){
    let customer:any = localStorage.getItem("userData");
      console.log("Installment");
      console.log(customer);
      this.http.post(`${this.baseUrl}/admin`, customer).subscribe(
        (data: any) => {
          console.log('Three Installment successful:', data);
          let types = localStorage.getItem("installmentType");
          console.log(types===null);
          if(!(types===null))
          {
            console.log("Entering");
          const datas:customer={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,currentbill:data.currentbill,previousbill:data.previousbill,balance:data.balance,status:data.status,type:"3 installment"}
          console.log(datas);
          this.http.post(`${this.baseUrl}/update`, datas).subscribe(
            (response1: any) => {
              console.log('Three Installment update successful:', response1);
            }
          );

          {
            this.http.post(`${this.baseUrl}/support`, customer).subscribe(
              (details: any) => {
                console.log('Customer Details Received:', details);
                this.responseData = details;
                this.amount=(this.responseData.previousbill/3);
                this.amount = this.amount.toFixed(2);
                const pendingCustomers:support={id:details.id,name:details.name,mobile:details.mobile,email:details.email,duedate:details.duedate,currentbill:details.currentbill,previousbill:details.previousbill,balance:details.balance,days:details.days,type:"3 installment",installmentamount:this.amount}
                console.log(pendingCustomers);
                this.http.post(`${this.baseUrl}/updatePending`, pendingCustomers).subscribe(
                  (response2: any) => {
                    console.log('update successful:', response2); } ) 
                
          }
            );
        }
        setTimeout(() => {
          // Navigate to the target page after a specific delay
          this.router.navigate(['/payinstall']); 
        }, 3000); // Specify the delay in milliseconds (e.g., 3000ms for a 3-second delay)
        // this.router.navigate(['/payinstall']);
          }
          else{
            this.router.navigate(['/payinstall']);
          }
        }
      );

      
        }

        twoinstall(){
          let customer:any = localStorage.getItem("userData");
            console.log("Installment");
            console.log(customer);
            this.http.post(`${this.baseUrl}/admin`, customer).subscribe(
              (data: any) => {
                console.log('Two Installment successful:', data);
                let types = localStorage.getItem("installmentType");
                console.log(types===null);
                if(!(types===null))
                {
                  console.log("Entering Bi-Install Payment");
                const datas:customer={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,currentbill:data.currentbill,previousbill:data.previousbill,balance:data.balance,status:data.status,type:"2 installment"}
                console.log(datas);
                this.http.post(`${this.baseUrl}/update`, datas).subscribe(
                  (response1: any) => {
                    console.log('Two Installment update successful:', response1);
                  }
                );
      
                {
                  this.http.post(`${this.baseUrl}/support`, customer).subscribe(
                    (details: any) => {
                      console.log('Customer Details Received:', details);
                      this.responseData = details;
                      this.amount=(this.responseData.previousbill/2);
                      this.amount = this.amount.toFixed(2);
                      const pendingCustomers:support={id:details.id,name:details.name,mobile:details.mobile,email:details.email,duedate:details.duedate,currentbill:details.currentbill,previousbill:details.previousbill,balance:details.balance,days:details.days,type:"2 installment",installmentamount:this.amount}
                      console.log(pendingCustomers);
                      this.http.post(`${this.baseUrl}/updatePending`, pendingCustomers).subscribe(
                        (response2: any) => {
                          console.log('update successful:', response2); } ) 
                      
                }
                  );
              }
              setTimeout(() => {
                // Navigate to the target page after a specific delay
                this.router.navigate(['/payinstall']); 
              }, 3000); // Specify the delay in milliseconds (e.g., 3000ms for a 3-second delay)

              // this.router.navigate(['/payinstall']);
                }
                else{
                  this.router.navigate(['/payinstall']);
                }
              }
            );
      
            
              }
        

}
