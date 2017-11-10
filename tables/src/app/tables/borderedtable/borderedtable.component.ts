import { Component, OnInit } from '@angular/core';
import { TabledataService }  from '../../services/tableservice/tabledata.service';

@Component({
  selector: 'app-borderedtable',
  templateUrl: './borderedtable.component.html',
  styleUrls: ['./borderedtable.component.css']
})
export class BorderedtableComponent implements OnInit {
	tabledata;
	danger=49;
  constructor(private service:TabledataService) { }

  ngOnInit() {
  	this.service.getdata().subscribe((data)=>{
  		console.log(data);
  		this.tabledata=data;
  		console.log(this.tabledata.progress);
  	})
  }

}
