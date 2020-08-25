import { Component, OnInit } from '@angular/core';
import { CountryhttpService } from '../countryhttp.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {

  public allRegion = [];
  constructor(public _service: CountryhttpService, private _http: HttpClient, private router:Router) { 
    console.log("region view called");
    
  }

  ngOnInit(): void {

    this.allRegion = this._service.getAllRegion();


  }

  openRegion(region) {
    this.router.navigate(["country-view", region]);
  }

}
