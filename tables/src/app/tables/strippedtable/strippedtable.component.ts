import { Component, OnInit } from '@angular/core';
import { TabledataService }  from '../../services/tableservice/tabledata.service';
@Component({
  selector: 'app-strippedtable',
  templateUrl: './strippedtable.component.html',
  styleUrls: ['./strippedtable.component.css']
})
export class StrippedtableComponent implements OnInit {
tabledata;
  constructor(private service:TabledataService) { }

  ngOnInit() {
  	this.service.getdata().subscribe((data)=>{
  		console.log(data);
  		this.tabledata=data;
  });
  }

}
