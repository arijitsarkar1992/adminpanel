import { Component, OnInit } from '@angular/core';
import { TabledataService }  from '../../services/tableservice/tabledata.service';

@Component({
  selector: 'app-condensedtable',
  templateUrl: './condensedtable.component.html',
  styleUrls: ['./condensedtable.component.css']
})
export class CondensedtableComponent implements OnInit {
tabledata;
  constructor(private service:TabledataService) { }

  ngOnInit() {
  	this.service.getdata().subscribe((data)=>{
  		console.log(data);
  		this.tabledata=data;
  });

}
}
