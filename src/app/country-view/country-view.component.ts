import { Component, OnInit } from '@angular/core';
import { CountryhttpService } from '../countryhttp.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css'],
  providers : [Location]
})
export class CountryViewComponent implements OnInit {

  public countries = [];
  public selectedCurrency;
  public selectedRegion;
  public selectedLanguage;

  constructor( public _route: Router, public toast:ToastrService, public _http:HttpClient, public _service:CountryhttpService , public location: Location, 
    private activatedRoute : ActivatedRoute) {
    
    
    this.activatedRoute.params.subscribe(

      res =>{
      console.log("activated route called" , res);
      this.getCountry(res["region"]);   
      this.selectedRegion = res["region"] ;
    })

   

   }

  ngOnInit(): void {
  
  }

    clearCurrencyFilter(){
      this.selectedCurrency = null;
      this.getCountry(this.selectedRegion);
    }

    clearLanguageFilter(){
      this.selectedLanguage=null;
      this.getCountry(this.selectedRegion);
    }


    getCountry(region){
      this._service.getCountryByRegion(region).subscribe(
        data =>{
          this.countries = data;
          console.log(data);               
        },
        error =>{
          console.log("error occured");
          
          console.log(error.errormessage);
          
        }
  
      )
      console.log(this.countries);
  
    }

    getCountryByLanguage(code,lanName){
      this.selectedLanguage = lanName;
      this._service.getCountryByLanguage(code).subscribe(
        data =>{
          this.countries = data;
          console.log(data);               
        },
        error =>{
          console.log("error occured");
          
          console.log(error.errormessage);
          
        }
        
      )
      console.log(this.countries);

    }


    getCountryByCurr(currency,currencyName): any{
      this.selectedCurrency = currencyName;
      this._service.getCountryByCurrency(currency).subscribe(
        data =>{
          this.countries = data;
          console.log(data);               
        },
        error =>{
          console.log("error occured");
          
          console.log(error.errormessage);
          
        }
  
      )
      console.log(this.countries);
  
    }

    


      goPrevious():any 
      {
        this.location.back();
        this.toast.success('Going-Back');
      }

    
}