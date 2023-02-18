import { Component } from '@angular/core';
import { ProductData } from 'src/app/models/productData';
import { ProductService } from 'src/app/services/product.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class ProductsComponent {
  produtos: ProductData[];
  novoProduto: ProductData;
  enviado: boolean;
  dialogoProduto: boolean;
  temProdutos: boolean;

  produtosSelecionados = [];
  constructor(
    private service: ProductService,
    private confirmationService: ConfirmationService
  ) {
    this.produtos = [];
    this.novoProduto = { id: 0, name: '', price: 0, quantity: 0 };
    this.enviado = false;
    this.dialogoProduto = false;
    this.temProdutos = false;
  }

  updateContent() {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.produtos = res;
      },
      error: (err) => console.log(err),
    });
    this.produtos = [...this.produtos];
  }
  ngOnInit() {
    this.updateContent();
  }

  editProduct(product: ProductData): void {
    this.novoProduto = { ...product };
    console.log(this.novoProduto);
    this.service.editProduct(product).subscribe((res) => console.log(res));
    this.dialogoProduto = true;
  }

  deleteProduct(product: ProductData): void {
    this.confirmationService.confirm({
      message: `tem certeza que vai excluir o produto ${product.name}?`,
      header: 'Excluir produto',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteProduct(product).subscribe((res) => {
          console.log(res);
          this.updateContent();
        });
      },
    });
  }
  deleteSelected(): void {
    this.confirmationService.confirm({
      message: 'deseja excluir todos os produtos marcados?',
      header: 'Excluir produtos marcados',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtosSelecionados.map((product) =>
          this.service.deleteProduct(product).subscribe((res) => {
            console.log(res);
            console.log('tamo ae');
            this.updateContent();
          })
        );
      },
    });
  }
  //metodo para abrir dialogo
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
    if (this.novoProduto.name.trim()) {
      //se já existir, atualize
      if (this.novoProduto.id) {
        console.log('já existe');
        this.service.editProduct(this.novoProduto).subscribe((res) => {
          console.log(res);
          this.updateContent();
        });
      }
      // crie um novo
      else {
        this.service.postProduct(this.novoProduto).subscribe((res) => {
          console.log(res);
          this.updateContent();
        });
      }
    }
    this.dialogoProduto = false;
    this.novoProduto = { id: 0, name: '', price: 0, quantity: 0 };
  }

}
