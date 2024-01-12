import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './customer/issues/issues.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { PendingComponent } from './customer-service/pending/pending.component';
import { OtherIssuesComponent } from './customer/other-issues/other-issues.component';
import { HttpClientModule } from '@angular/common/http';
import { InstallmentComponent } from './customer/installment/installment.component';
import { InstallmentpaymentComponent } from './customer/installmentpayment/installmentpayment.component';
import { TotalpaymentComponent } from './customer/totalpayment/totalpayment.component';
import { DisplaypaymentComponent } from './customer/displaypayment/displaypayment.component';
import { DisplayinstallpaymentComponent } from './customer/displayinstallpayment/displayinstallpayment.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    CustomerServiceComponent,
    HomeComponent,
    IssuesComponent,
    PaymentComponent,
    CustomerDetailsComponent,
    PendingComponent,
    OtherIssuesComponent,
    InstallmentComponent,
    InstallmentpaymentComponent,
    TotalpaymentComponent,
    DisplaypaymentComponent,
    DisplayinstallpaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
