import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginService {

  constructor( private http: Http ) { }

  googleLogin(data){
  	return this.http.post("http://localhost:3000/api/login", data).map((res) => {
  		return res.json();
  	})
  }
}
