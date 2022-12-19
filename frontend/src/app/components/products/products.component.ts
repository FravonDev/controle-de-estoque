import { Component } from '@angular/core';
import { ProductData } from 'src/app/models/productData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent {
  produtos: ProductData[];
  produtosSelecionados = []
  constructor(private service: ProductService) {
    this.produtos = [];
  }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.produtos = res;
      },
      error: (err) => console.log(err),
    });
  }
  editProduct(product: ProductData): void {
    console.log(product);
  }

  deleteProduct(product: ProductData): void {
    console.log(product);
  }

  //consultar um produto
  // this.service.getProduct(11).subscribe({
  //   next: (res) => console.log(res),
  //   error: (err) => console.log(err)
  // })
  openNew() {
    this.produtos = [];
}
}
