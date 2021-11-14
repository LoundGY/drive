import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  forwardRef,
  Output,
  EventEmitter,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
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
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: string;
  @Output() isValid = new EventEmitter<any>();
  public inputFormControl: FormControl;
  public value: string;
  public valid: boolean;
  public disabled: boolean = false;
  private onChange = (value: any) => {};
  public onTouched = () => {};

  ngOnInit(): void {
    switch (this.type) {
      case 'author':
        {
          this.inputFormControl = new FormControl('', [
            Validators.required,
            this.inputValidator,
          ]);
        }
        break;
      case 'size':
        {
          this.inputFormControl = new FormControl('', [
            Validators.required,
            this.inputValidator,
          ]);
        }
        break;
      case 'name':
        {
          this.inputFormControl = new FormControl('', [
            Validators.required,
            this.inputValidator,
          ]);
        }
        break;
    }
  }

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
    if (this.inputFormControl.hasError('invalidInput')) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    this.value = (insideValue.target as HTMLInputElement).value;
    this.onChange(insideValue);
    this.isValid.emit([
      {
        state: this.valid,
        text: this.inputFormControl.getError('invalidInput'),
      },
      this.value,
    ]);
    this.onTouched();
  }

  private inputValidator(control: FormControl): ValidationErrors {
    const value = control.value;
    //Первая буква заглавная
    const hasCapitalLetter = /[A-Z]/.test(value[0]);
    // Проверка на минимальную длину пароля
    const isLengthValid = value ? value.length > 4 : false;
    //валидатор
    const inputValid = hasCapitalLetter && isLengthValid;
    if (!inputValid) {
      return { invalidInput: 'Неверный формат данных' };
    }
    return null;
  }
}
