import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; //// Ng module referencer


import { HttpClientModule } from '@angular/common/http';
////// calls all components to be used in the export

import { AppComponent } from "./app.component";

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing.module";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

//import { HeroService } from './hero.service';
//import { MessageService } from './message.service';
//import { HelloComponent } from "./hello.component";
/// references all the modules present in the app

@NgModule({
  imports: [
  AppRoutingModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  bootstrap: [AppComponent],
  providers: [InMemoryDataService]
  //  providers: [HeroService, MessageService]
})
export class AppModule {} /// wraps all the reference for further usage
