import { Component, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
    @Input() type: string = '';
    @Input() placeholder: string = '';

    onChange: any = (_: any) => {};
    onTouched: any = () => {};

    value: string = '';

    constructor(
        @Self() @Optional() private control: NgControl
    ) {
        this.control.valueAccessor = this;
    }

    ngOnInit(): void {}

    writeValue(value: string) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    get inputControl(): FormControl {
        return this.control.control as FormControl;
    }

}
