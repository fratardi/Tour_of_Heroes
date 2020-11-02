import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; //// Ng module referencer

////// calls all components to be used in the export

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

/// references all the modules present in the app

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService]
})
export class AppModule {} /// wraps all the reference for further usage
