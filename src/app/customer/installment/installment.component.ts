import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/module/customer';
import { support } from 'src/app/module/support';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent {
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
  amount:any;
  cardExpiryDate:any;
  cardholderName:any;
  cardNumber:any;
  cvv:any;
  pageReloaded: boolean = false;
  private baseUrl = 'http://localhost:9999';
empform: any;
constructor(private eService:ProjectserviceService, private http:HttpClient,private router: Router)
{
  let customer:any = localStorage.getItem("userData");
  console.log("Working");
  console.log(customer);
  this.http.post(`${this.baseUrl}/paydet`, customer).subscribe(
    (response: any) => {
      console.log('Login successful:', response);
      this.responseData = response;
  //     this.amount=(this.responseData.previousbill/3);
  //     this.amount = this.amount.toFixed(2);
  //     localStorage.setItem("pendingbalance",this.amount);
  //     // Successful login, navigate to the module page
  //     console.log(response);
  //     this.router.navigate(['/payinstall']);
  //   },
  //   (error: any) => {
  //     console.error('Login failed:', error);
  //     // Handle login error, e.g., display an error message
    }
  ); 
  // let timeoutId: any;

// // Check if the pageReloaded flag is not set and the timeoutId is not set
// if (!this.pageReloaded && !timeoutId) {
//   timeoutId = setTimeout(() => {
//     location.reload();
//     this.pageReloaded = true;
//     clearTimeout(timeoutId); // Clear the timeout after reloading
//   }, 8000);
// }
}
onSubmit() {

  let customer:any = localStorage.getItem("userData");
      this.http.post(`${this.baseUrl}/installmentamount`, customer).subscribe(
        (data: any) => {
          console.log('Admin successful:', data);
          // let pendingbalance:any = localStorage.getItem("pendingbalance");
          const balanceNumeric = parseFloat(data.balance);
          const previousbalance = parseFloat(data.installmentamount);
          const previousbill=parseFloat(data.previousbill);
          if(previousbill > previousbalance  || (previousbill-2) > previousbalance ){
          const newBalanceNumeric = balanceNumeric - previousbalance;
          const newPreviousBalance=  previousbill-previousbalance;
          const newBalanceString = newBalanceNumeric.toString();
          const newPreviousString=newPreviousBalance.toString();
          const datas:support={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,balance:newBalanceString,days:data.days,type:data.type,currentbill:data.currentbill,previousbill:newPreviousString,installmentamount:data.installmentamount}
          console.log(datas);
          console.log(newBalanceString);
          console.log(newPreviousString);
          this.http.post(`${this.baseUrl}/updateinstallment`, datas).subscribe(
            (response1: any) => {
              console.log('update successful:', response1);
            }
          );
          const datas1:customer={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,currentbill:data.currentbill,previousbill:newPreviousString,balance:newBalanceString,status:data.status,type:data.type}
          console.log(datas1);
          this.http.post(`${this.baseUrl}/update`, datas1).subscribe(
            (response1: any) => {
              console.log('Admin update successful:', response1);
            }
          );
        }
        else{
          // this.http.post(`${this.baseUrl}/paid`, customer).subscribe(
          //   (response: any) => {
          //     console.log('Deleted successful:', response);
          //     // Successful login, navigate to the module page
              this.http.post(`${this.baseUrl}/admin`, customer).subscribe(
                (data: any) => {
                  console.log('Admin successful:', data);
                  const datas:customer={id:data.id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,currentbill:data.currentbill,previousbill:"0",balance:data.balance,status:"Paid",type:""}
                  console.log(datas);
                  this.http.post(`${this.baseUrl}/update`, datas).subscribe(
                    (response1: any) => {
                      console.log('update successful:', response1);

                      if(data.balance == "0")
                      {
                        this.http.post(`${this.baseUrl}/paid`, customer).subscribe(
                            (response: any) => {
                              console.log('Deleted successful:', response); } );
                      }
                      else
                      {
                        this.http.post(`${this.baseUrl}/support`, customer).subscribe(
                          (details: any) => {
                            console.log('Customer Details Received:', details);
                            const pendingCustomers:support={id:details.id,name:details.name,mobile:details.mobile,email:details.email,duedate:details.duedate,currentbill:details.currentbill,previousbill:"0",balance:details.balance,days:details.days,type:"",installmentamount:"0"}
                            console.log(pendingCustomers);
                            this.http.post(`${this.baseUrl}/updatePending`, pendingCustomers).subscribe(
                              (response2: any) => {
                                console.log('update successful:', response2); } ) 
                            
                      }
                        );
                    }
                    }
                  );
                },
                (error: any) => {
                  console.error('Delete and Update failed:', error);
                  // Handle login error, e.g., display an error message
                }
              );
        }
        this.router.navigate(['/display']);
      }
      );
}

installmentmail():void{
  let customer:any = localStorage.getItem("userData");
  console.log(customer);
  this.eService.installmentmail(customer).subscribe(response => {
    console.log(response); 
  });
}

submitAndHandleIssues() {
  let customer: any = localStorage.getItem('userData');
  this.installmentmail(); // Call the issues method
  this.onSubmit(); // Call the onSubmit method
}

}
