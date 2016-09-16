import {Component} from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
  providers: []
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

  public showAlert(event: Event) {
    alert(`Hello ${event.type}`);
  }
}
