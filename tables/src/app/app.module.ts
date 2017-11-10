import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routingcomponent } from './app-routing/app-routing.module';
import { FormformatComponent } from './forms/formformat/formformat.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingcomponent,
    FormformatComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {
    	path:'',
    	component:HomeComponent
    },
    {
      path:'forms',
      component:FormformatComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
