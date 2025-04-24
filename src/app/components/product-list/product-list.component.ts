import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() productObj!: Product;
  productList: Product[] = [];
  // ngOnInit(): void {
  //   this.productList.push(this.productObj);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['productObj']);

    if (changes['productObj'] && this.productObj) {
      this.productList.push(this.productObj);
    }
  }
}
