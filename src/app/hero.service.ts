import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: "root" })
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

//  getHeroes(): void {
//  this.heroService.getHeroes()
//      .subscribe(heroes => this.heroes = heroes);
//}

  constructor() {}
}
