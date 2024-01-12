import { Component } from '@angular/core';
import { customer } from 'src/app/module/customer';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

customerlist:any;

constructor(private eService:ProjectserviceService)
{
  this.eService.viewcustomer().subscribe((cus)=>{this.customerlist=cus});
}

}
