import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  @Output() EmitterData: EventEmitter<any> = new EventEmitter();

  myRegForm = new FormGroup({
    productName: new FormControl(null, Validators.required),
    productDescription: new FormControl(null, Validators.required),
    productImage: new FormControl(null, Validators.required),
    productRate: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
    ]),
  });

  sendData() {
    let obj = {
      id: Math.random(),
      name: this.myRegForm.value.productName,
      description: this.myRegForm.value.productDescription,
      imageURL: this.myRegForm.value.productImage,
      rate: this.myRegForm.value.productRate,
    };

    this.EmitterData.emit(obj);
    this.myRegForm.reset();
  }
}
