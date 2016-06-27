import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeroesComponent],
  providers: [HeroService]
})
export class AppComponent {
  title  = 'Tour of Heroes';
}
