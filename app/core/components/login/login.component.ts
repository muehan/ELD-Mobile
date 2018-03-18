import { Component } from "@angular/core";

@Component({
    selector: 'eld-login',
    templateUrl: './core/components/login/login.component.html',
    styleUrls: [
        './core/components/login/login.component.scss'
    ]
})

export class ELDLoginComponent {

    constructor(){
        console.log('welcome in the login component');
    }

    private user = {
        email: '',
        password: ''
    }

}