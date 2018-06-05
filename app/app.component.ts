import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData, Observable } from "data/observable";
import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "my-app",
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss'
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.
      
    }).then(
      instance => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
  }
}