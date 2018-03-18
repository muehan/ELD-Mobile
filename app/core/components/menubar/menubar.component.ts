import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'eld-menubar',
    templateUrl: './core/component/menubar/menubar.component.html',
    styleUrls: [
        './core/component/menubar/menubar.component.scss'
    ]
})

export class MenuBarComponent implements OnInit {
    constructor(
        private routerExtensions: RouterExtensions) { }

    ngOnInit() { }

    public goBack() {
        console.log('hit the back button');
        this.routerExtensions.backToPreviousPage();
     }
}