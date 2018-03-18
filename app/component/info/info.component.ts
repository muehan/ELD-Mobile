import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eld-info',
    templateUrl: './component/info/info.component.html',
    styleUrls: [
        './component/info/info.component.scss'
    ]
})

export class ELDInfoComponent implements OnInit {
    constructor() {
        console.log('welcome to the info component');
     }

    ngOnInit() { }
}