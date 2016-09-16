import {Component} from "@angular/core";
import {Http} from "@angular/http";


@Component({
  selector: "about",
  templateUrl: "./about.html",
  styleUrls: ["./about.css"],
  providers: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
