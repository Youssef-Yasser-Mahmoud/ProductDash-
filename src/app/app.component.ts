import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { Product } from './interface/product';
@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TASK';
  productObj!: Product;
  receiveData(obj: any) {
    this.productObj = obj;
    console.log(this.productObj);
  }
}
