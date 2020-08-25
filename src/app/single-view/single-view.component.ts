import { Component, OnInit } from '@angular/core';
import { CountryhttpService } from '../countryhttp.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
  providers:[Location]
})
export class SingleViewComponent implements OnInit {

  public singleCountry ;
  constructor(
    public location: Location,
    public toast:ToastrService,
    private router:Router,
    private activatedRoutr:ActivatedRoute,
    private http:HttpClient,
    private service:CountryhttpService) { 
      console.log("single-view-constructor-caleld");      
    }

  ngOnInit(): void {
   let countryName= this.activatedRoutr.snapshot.paramMap.get('name');
   
   console.log(countryName);
   
   
   this.service.getSingleCountry(countryName).subscribe(
    data =>{
      this.singleCountry=data;
      console.log(data);
    },
    error =>{
      console.log(error.errormessage);
      
    } 
  )
  }
  goPrevious():any 
      {
        this.location.back();
        this.toast.success('Countries List!');
      }
  goHome():any{
    this.toast.success('Welcome-Home!');
    setTimeout(()=>{
      this.router.navigate(['/region-view'])
    })
  }
  

}
