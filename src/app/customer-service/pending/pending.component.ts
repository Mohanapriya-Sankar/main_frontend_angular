import { Component } from '@angular/core';
import { support } from 'src/app/module/support';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {

  unpaidlist:any;
  customers:support[] | undefined;

  constructor(private eService:ProjectserviceService)
  { }
  ngOnInit():void{
    this.eService.viewpending().subscribe((pro)=>{this.unpaidlist=pro});
  }
  sendEmail(customer: support):void
  {
    const customerId=customer.id ?? " ";
      this.eService.sendEmail(customerId).subscribe(response => {
        console.log(response); 
      });
  }



}
