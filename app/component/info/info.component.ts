import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eld-info',
    templateUrl: './core/info/info.component.html',
    styleUrls: [
        './core/info/info.component.scss'
    ]
})

export class ELDInfoComponent implements OnInit {
    constructor() {
        console.log('welcome to the info component');
     }

    ngOnInit() { }
}