import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeService } from '../../services/home.service';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LazyLoadImagesModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }