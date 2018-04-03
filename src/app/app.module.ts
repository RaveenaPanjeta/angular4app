// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

// Components
import { AppComponent } from './app/app.component';
import { LoginComponent } from "./components/login/login.component";

// Routing Modules
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LazyLoadImagesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }