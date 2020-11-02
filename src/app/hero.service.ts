import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({ providedIn: "root" })
export class HeroService {
 
 
 
    getHeroes():  Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
  }

//  getHeroes(): void {
//  this.heroService.getHeroes()
//      .subscribe(heroes => this.heroes = heroes);
//}

  constructor(private messageService: MessageService) {}
}
