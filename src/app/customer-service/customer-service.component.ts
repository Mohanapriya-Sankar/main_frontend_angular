import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent {

  email:string='';
  password:string='';
  private baseUrl = 'http://localhost:9999';

  constructor(private http: HttpClient, private router: Router)
  {

  }
  onSubmit() {

    const credentialss = { email: this.email, password: this.password };

      console.log(credentialss)

    this.http.post(`${this.baseUrl}/servilogin`, credentialss).subscribe(

      (response: any) => {

        console.log('Login successfull:', response);

        // Successful login, navigate to the module page

        this.router.navigate(['/pending']);

      },

      (error: any) => {

        console.error('Login failed:', error);

        // Handle login error, e.g., display an error message

      }

    );

  }
}
