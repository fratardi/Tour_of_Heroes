import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero"; /// Calls the structure of hero type

import { HEROES } from "../mock-heroes"; //// calls the list of mnock heroes

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  constructor() {}

  ngOnInit() {}
}
