import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routingcomponent } from './app-routing/app-routing.module';
import { FormformatComponent } from './forms/formformat/formformat.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingcomponent,
    FormformatComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {
    	path:'',
    	component:HomeComponent
    },
    {
      path:'forms',
      component:FormformatComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
    ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
