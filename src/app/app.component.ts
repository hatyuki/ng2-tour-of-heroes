import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title  = 'Tour of Heroes';
  heroes: Hero[ ];
  selectedHero: Hero;

  constructor (private heroService: HeroService) {
  }

  getHeroes ( ) {
    this.heroService.getHeroes( ).then((heroes) => this.heroes = heroes);
    // this.heroService.getHeroesSlowly( ).then((heroes) => this.heroes = heroes);
  }

  ngOnInit ( ) {
    this.getHeroes( );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
