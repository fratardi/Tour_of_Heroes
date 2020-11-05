import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero"; /// Calls the structure of hero type

//import { HEROES } from "../mock-heroes"; //// calls the list of mnock heroes
// copy and  type for comment   /* * */

import { HeroService } from "../hero.service";
//import { MessageService } from "../message.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {

  //selectedHero: Hero;

  heroes: Hero[];

//Thanks me later :-)

 // onSelect(hero: Hero): void {
  //  this.selectedHero = hero;
  //  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //}

///delete handler component
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}

  //add click handler
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}


  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  constructor(
    private heroService: HeroService,
   // private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }
}
