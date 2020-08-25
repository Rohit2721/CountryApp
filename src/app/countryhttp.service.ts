import { Injectable } from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Injectable({
  providedIn: 'root'
})
export class CountryhttpService {

  public allRegion: any =[ 
    {"RGN" : "Asia"},
    {"RGN" : "Africa"},
    {"RGN" : "Oceania"},
    {"RGN" : "Americas"},   
    {"RGN" : "Europe"}   
  ];


  public allReg = "https://restcountries.eu/rest/v2/region/";
  public singleCountry= "https://restcountries.eu/rest/v2/name/";
  public listCurrency ="https://restcountries.eu/rest/v2/all?fields=currencies";
  public countryByCurrency= "https://restcountries.eu/rest/v2/currency/";
  public countryByLanguage= "https://restcountries.eu/rest/v2/lang/";

  constructor(public _http: HttpClient) {
    console.log("service called");
   }

   public getAllRegion():any{
     return this.allRegion;
   }

   public getCountryByRegion(region):any{
    return this._http.get(this.allReg + region);
     
  }
 
  public getSingleCountry(countryName):any{
    return this._http.get(this.singleCountry + countryName  +"?fullText=true");
     
  }

  public getAllCurrency():any{
    let myResult = this._http.get(this.listCurrency);
    return myResult
  }
  public getCountryByCurrency(currency):any{

    return this._http.get(this.countryByCurrency + currency);
    
  }

  public getCountryByLanguage(language):any{
    return this._http.get( this.countryByLanguage + language)
  }

}
