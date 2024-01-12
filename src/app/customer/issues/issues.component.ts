import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {

  constructor(private router: Router)
  {

  }
  onSubmit()
  {
    let installmentType:any = localStorage.getItem("installmentType");
    console.log("Hello");
    console.log(installmentType);
    if(installmentType === null || installmentType == "null" || installmentType == 0)
    {
      this.router.navigate(['/payoptions']);
    }
    else{
      this.router.navigate(['/payinstall']);

    }
  }
}
