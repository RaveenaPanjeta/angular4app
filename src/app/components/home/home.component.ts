import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from "../../mocks/home";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular 4 Home';
  homes: Home[];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  getHomes(): void {
    this.homeService.getHomes()
      .then(homes => this.homes = homes);
  }


  ngOnInit(): void {
    this.getHomes();
  }
}
