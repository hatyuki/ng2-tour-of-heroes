import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [ ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[ ];
  selectedHero: Hero;

  constructor (
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes ( ) {
    this.heroService.getHeroes( ).then((heroes) => this.heroes = heroes);
    // this.heroService.getHeroesSlowly( ).then((heroes) => this.heroes = heroes);
  }

  ngOnInit ( ) {
    this.getHeroes( );
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail ( ) {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
