import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-app",
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss'
  ]
})
export class AppComponent {

  constructor(private routerExtensions: RouterExtensions) { }

  public goBack() {
    this.routerExtensions.backToPreviousPage();
  }

}


