import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private login:LoginService ) { }

  ngOnInit() {
  }
  googleAuth(data){
  	this.login.googleLogin(data).subscribe((res) => {
  		console.log(res);
  	});
  }
}
