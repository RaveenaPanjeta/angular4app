// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

// Components
import { AppComponent } from './app/app.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

//services
import { HomeService } from "./services/home.service";

// Routing Modules
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
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
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }