import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';//it is using for form
import {FormsModule,ReactiveFormsModule} from '@angular/forms';import { RouterModule } from '@angular/router';
import { BorderedtableComponent } from '../tables/borderedtable/borderedtable.component';
import { StrippedtableComponent } from '../tables/strippedtable/strippedtable.component';
import { HoverresponsiveComponent } from '../tables/hoverresponsive/hoverresponsive.component';
import { CondensedtableComponent } from '../tables/condensedtable/condensedtable.component';
import { VerticalformsComponent } from '../forms/verticalforms/verticalforms.component';
import { FullwidthComponent } from '../tables/fullwidth/fullwidth.component';
import { HorizontalComponent } from '../forms/horizontal/horizontal.component';
import { TabledataService } from '../services/tableservice/tabledata.service';
import { FormdataService } from '../services/formservice/formdata.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TabledataService,FormdataService]
})
export class AppRoutingModule { }
//exporting app-routing to app.module.ts
export const routingcomponent =
    [ 
        BorderedtableComponent,
    	StrippedtableComponent,
    	HoverresponsiveComponent,
    	CondensedtableComponent,
   		FullwidthComponent,
   		VerticalformsComponent,
      HorizontalComponent
    ]
