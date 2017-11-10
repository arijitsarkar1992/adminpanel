import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TabledataService {

  constructor(private http:Http) { }
  getdata(){
  	return this.http.get("http://localhost:3000/api/get_simpletable").map((response)=>response.json())
  }

}
