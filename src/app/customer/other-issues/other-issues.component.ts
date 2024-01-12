import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectserviceService } from 'src/app/service/projectservice.service';

@Component({
  selector: 'app-other-issues',
  templateUrl: './other-issues.component.html',
  styleUrls: ['./other-issues.component.css']
})
export class OtherIssuesComponent {
  customerId:any;
constructor(private eService: ProjectserviceService,private router:Router){}
  successMessage:string='';
  issues():void{
    let customer:any = localStorage.getItem("userData");
    console.log(customer);
    this.eService.issues(customer).subscribe(response => {
      console.log(response); 
    });
    this.router.navigate(['/displayinstall']);
    

  }
    // this.successMessage='Your Issues will be Resolved soon.';

  
}
