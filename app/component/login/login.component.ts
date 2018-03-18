import { Component } from "@angular/core";

@Component({
    selector: 'eld-login',
    templateUrl: './component/login/login.component.html',
    styleUrls: [
        './component/login/login.component.scss'
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