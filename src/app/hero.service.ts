import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })


export class HeroService {
 
    getHeroes():  Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  //this.messageService.add('HeroService: fetched heroes');
  return this.http.get<Hero[]>(this.heroesUrl);
  }




  constructor
  (
    private http: HttpClient,
    private messageService: MessageService,
  )
  {} //empty scope

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }





private heroesUrl = 'api/heroes';  // URL to web api

/** Log a HeroService message with the MessageService */

private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

}
