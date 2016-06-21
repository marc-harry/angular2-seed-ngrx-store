import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  selector: 'app',
  pipes: [],
  directives: [
    ROUTER_DIRECTIVES,
    MdAnchor,
    MdButton,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES
  ],
  providers: [ MdIconRegistry ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
  ],
  template: require('./app.html'),
})
export class App {

  constructor() {
  }

}
