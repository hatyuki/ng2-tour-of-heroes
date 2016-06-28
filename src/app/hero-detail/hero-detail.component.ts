import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input( ) hero: Hero;
  @Output( ) close = new EventEmitter( );
  error: any;
  navigated = false; // true if navigated here

  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit ( ) {
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        let id = +params['id']; // (+) converts string 'id' to a number
        this.navigated = true;
        this.heroService.getHero(id)
          .then((hero) => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero( );
      }
    });
  }

  save ( ) {
    this.heroService
      .save(this.hero)
      .then((hero) => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack (savedHero: Hero = null) {
    this.close.emit(savedHero);

    if (this.navigated) {
      window.history.back( );
    }
  }
}
