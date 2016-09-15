import {Component, ViewEncapsulation} from "@angular/core";
import { MdAnchor, MdButton } from "@angular2-material/button";
import { MdToolbar } from "@angular2-material/toolbar";


@Component({
  selector: "app",
  encapsulation: ViewEncapsulation.None,
  styles: [
    require("normalize.css"),
  ],
  template: require("./app.html"),
})
export class App {

  constructor() {
  }

}
