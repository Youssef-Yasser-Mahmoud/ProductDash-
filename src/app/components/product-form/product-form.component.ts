import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productName: string = '';
  productDescription: string = '';
  productImage: string = '';
  productRate: string = '';

  @Output() EmitterData: EventEmitter<any> = new EventEmitter();

  sendData() {
    let obj = {
      id: Math.random(),
      name: this.productName,
      description: this.productDescription,
      imageURL: this.productImage,
      rate: this.productRate,
    };

    this.EmitterData.emit(obj);
    this.productName = '';
    this.productDescription = '';
    this.productImage = '';
    this.productRate = '';
  }
}
