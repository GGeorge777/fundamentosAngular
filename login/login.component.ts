import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email = "";
senha = "";
  auth: any;

constructor(
  auth: AuthService,
  private router: Router
) { }

  ngOnInit(): void {
}
  login(){
    if(this.auth.login(this.email,this.senha)) {
      this.router.navigate(["pagina-protegida"]);
      return;

    }
    alert("Login está invalido");
    this.email="";
    this.senha="";
  }
}