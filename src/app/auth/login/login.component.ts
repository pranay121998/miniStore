import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginmsg="";
  LOGIN="https://reqres.in/api/login";
  constructor(private http:HttpClient,private router:Router)
  { }

  ngOnInit(): void {
  }

  public login(data:any)
  {
    console.log(data)

    this.http.post(this.LOGIN,data).subscribe((response:any)=>
    {
      // console.log(response)
      if(response.token){
      localStorage.setItem("token",JSON.stringify(response.token))
      this.router.navigate(['/home']);

    }
      else {
        this.loginmsg = "Login Failed !";  
      }
    });
    
  }
}
