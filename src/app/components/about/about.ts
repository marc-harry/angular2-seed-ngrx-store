import {Component} from "@angular/core";
import {Http} from "@angular/http";


@Component({
  selector: "about",
  template: require("./about.html"),
  styles: [require("./about.css")],
  providers: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
