import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eld-info',
    templateUrl: './core/component/info/info.component.html',
    styleUrls: [
        './core/component/info/info.component.scss'
    ]
})

export class ELDInfoComponent implements OnInit {
    constructor() {
        console.log('welcome to the info component');
     }

    ngOnInit() { }
}