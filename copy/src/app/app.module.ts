import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoadScriptService } from './lazy-load.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LazyLoadScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
