import { Component } from "@angular/core";

@Component({
    selector: 'eld-login',
    templateUrl: './core/login/login.component.html',
    styleUrls: [
        './core/login/login.component.scss'
    ]
})

export class ELDLoginComponent {

    private user = {
        email: '',
        password: ''
    }

}