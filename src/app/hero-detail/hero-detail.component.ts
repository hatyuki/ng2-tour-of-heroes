import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input( )
  hero: Hero;

  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit ( ) {
    this.route.params.subscribe((params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.heroService.getHero(id)
        .then((hero) => this.hero = hero);
    });
  }

  goBack ( ) {
    window.history.back( );
  }
}
