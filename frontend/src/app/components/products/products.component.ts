import { Component } from '@angular/core';
import { ProductData } from 'src/app/models/productData';
import { ProductService } from 'src/app/services/product.service';

import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  providers: [MessageService, ConfirmationService],
})
export class ProductsComponent {
  produtos: ProductData[];
  //FIXME:
  novoProduto: ProductData;
  enviado: boolean;
  dialogoProduto: boolean;

  produtosSelecionados = [];
  constructor(
    private service: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
     ) {
    this.produtos = [];
    this.novoProduto = { id: 0, name: '', price: 0, quantity: 0 };
    this.enviado = false;
    this.dialogoProduto = false;
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
    this.confirmationService.confirm({
      message: `tem certeza que vai excluir o produto ${product.name}?`,
      header: 'Excluir produto',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteProduct(product).subscribe((res) => console.log(res))
      }

  });
  }

  //consultar um produto
  // this.service.getProduct(11).subscribe({
  //   next: (res) => console.log(res),
  //   error: (err) => console.log(err)
  // })
  openNew() {
    this.dialogoProduto = true;
    this.novoProduto;
    this.enviado = false;
  }

  //método para ocultar a caixa de dialogo
  hideDialog() {
    this.dialogoProduto = false;
    this.enviado = false;
  }
  //método para salvar o novo produto
  saveProduct() {
    this.enviado = true;

    //salvar o produto
    if (this.novoProduto.name.trim()){
      this.service.postProduct(this.novoProduto).subscribe((res) => console.log(res))

    }
    this.dialogoProduto = false
    }
}
