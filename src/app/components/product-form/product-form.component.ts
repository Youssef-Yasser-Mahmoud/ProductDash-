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
      Validators.min(1),
      Validators.max(10)
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

    if (this.myRegForm.valid) {
      this.EmitterData.emit(obj);
      this.myRegForm.reset();
    }
    console.log(this.myRegForm.valid)
  }
}
