import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData, Observable } from "data/observable";

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
    console.log('hit the back button');
    this.routerExtensions.backToPreviousPage();
 }

}

export function onInformation(args: observable.EventData) {
  console.log("Delete action item tapped.");
}