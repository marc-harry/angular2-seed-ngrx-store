import {Component} from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require('./home.css')],
  providers: [],
  directives: [MD_BUTTON_DIRECTIVES],
  pipes: []
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

  public showAlert(event: Event) {
    alert(`Hello ${event.type}`);
  }
}
