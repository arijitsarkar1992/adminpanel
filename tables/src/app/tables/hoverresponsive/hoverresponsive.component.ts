import { Component, OnInit } from '@angular/core';
import { TabledataService }  from '../../services/tableservice/tabledata.service';

@Component({
  selector: 'app-hoverresponsive',
  templateUrl: './hoverresponsive.component.html',
  styleUrls: ['./hoverresponsive.component.css']
})
export class HoverresponsiveComponent implements OnInit {
tabledata;
  constructor(private service:TabledataService) { }

  ngOnInit() {
  	this.service.getdata().subscribe((data)=>{
  		console.log(data);
  		this.tabledata=data;
  });
  }

}
