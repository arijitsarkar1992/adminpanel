import { Component, OnInit } from '@angular/core';
import { TabledataService }  from '../../services/tableservice/tabledata.service';
@Component({
  selector: 'app-fullwidth',
  templateUrl: './fullwidth.component.html',
  styleUrls: ['./fullwidth.component.css']
})
export class FullwidthComponent implements OnInit {
tabledata;
  constructor(private service:TabledataService) { }

  ngOnInit() {
  	this.service.getdata().subscribe((data)=>{
  		console.log(data);
  		this.tabledata=data;
  });
  }

}
