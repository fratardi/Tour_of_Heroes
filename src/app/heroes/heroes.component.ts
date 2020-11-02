import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero"; /// Calls the structure of hero type

import { HEROES } from "../mock-heroes"; //// calls the list of mnock heroes

import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes: Hero[];
  //this.heroes = this.heroService.getHeroes();
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

//getHeroes(): void {
//  this.heroes = this.heroService.getHeroes();
//}


getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
}
