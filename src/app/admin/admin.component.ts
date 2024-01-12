import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectserviceService } from '../service/projectservice.service';
import { adminmodule } from '../module/adminmodule';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username:string='';
  password:string='';

  private baseUrl = 'http://localhost:9999';

  constructor (private http: HttpClient, private router: Router)
  {
    
  }
  

  onSubmit() {

    const credentials = { username: this.username, password: this.password };
    this.http.post(`${this.baseUrl}/login`, credentials).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Successful login, navigate to the module page
        this.router.navigate(['/details']);
      },
      (error: any) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., display an error message
      }
    );
  }
}

