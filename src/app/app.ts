import {Component, ViewEncapsulation} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
  ],
  template: require('./app.html'),
})
@Routes([
  { path: '/home',       component: Home },
  { path: '/about',      component: About },
  { path: '/github', component: RepoBrowser },
  { path: '*', component: Home }
])
export class App {

  constructor() {}

}
