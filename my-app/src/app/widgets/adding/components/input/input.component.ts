import { Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Output() isValid = new EventEmitter<any>();
  public inputFormControl = new FormControl('', [Validators.required]);
  public value: string;
  public valid: boolean;
  public disabled: boolean = false;
  private onChange = (value: any) => {};
  public onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string) {
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  updateValue(insideValue: Event) {
    if (this.inputFormControl.hasError('required')) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    this.value = (insideValue.target as HTMLInputElement).value;
    this.onChange(insideValue);
    this.isValid.emit([this.valid, this.value]);
    this.onTouched();
  }
}
