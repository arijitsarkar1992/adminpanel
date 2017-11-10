import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FormdataService {

  constructor(private http:Http) { }
  form_info(userinfo){
  	return this.http.post("http://localhost:3000/api/add_form_data",userinfo).map(response=>response.json());
  }

}
