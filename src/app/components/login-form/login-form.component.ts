import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    formGroup: FormGroup = new FormGroup({});

    constructor() {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.formGroup = new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
            alejo: new FormControl(''),
        });
    }

    enviar() {
        console.log(this.formGroup.value);
    }
}
