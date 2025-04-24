import { Component } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: Product[] = [
    {
      id: 1,
      name: 'Mouse',
      description: 'This mouse is good',
      rate: 7.5,
      imageURL: 'https://fakeimg.pl/300/',
    },
    {
      id: 2,
      name: 'Keyboard',
      description: 'This keyboard is good',
      rate: 5.5,
      imageURL: 'https://fakeimg.pl/300/',
    },
  ];
}
