import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionViewComponent } from './region-view/region-view.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { RouterModule,Router } from '@angular/router';
import {CountryhttpService } from './countryhttp.service';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {Cookie} from 'ng2-cookies';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionViewComponent,
    CountryViewComponent,
    SingleViewComponent,
    AboutComponent,
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'region-view',component:RegionViewComponent, pathMatch: 'full'},
      {path: '',component:RegionViewComponent},
      {path: 'country-view/:region',component:CountryViewComponent},
      {path:'single-view/:name', component:SingleViewComponent},
      {path:'about', component:AboutComponent}
    ])
  ],
  providers: [CountryhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
