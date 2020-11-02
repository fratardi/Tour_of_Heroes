import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; //// Ng module referencer

////// calls all components to be used in the export

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/// references all the modules present in the app

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {} /// wraps all the reference for further usage
