import { Component } from '@angular/core';
import { ProductData } from 'src/app/models/productData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  produtos:ProductData | any;
  constructor(
    private service: ProductService
  ) {}

  ngOnInit(){

      this.service.getProducts().subscribe({
      next: (res) => {
        this.produtos = res
        },
      error: (err) => console.log(err)
    })


// this.service.getProduct(11).subscribe({
//   next: (res) => console.log(res),
//   error: (err) => console.log(err)
// })


  }

}
