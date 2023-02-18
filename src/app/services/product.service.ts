import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

import { ProductData } from 'src/app/models/productData';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL: string = '';
  private controlData:ProductData | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.controlApi;
  }


  getProducts():Observable<ProductData[]>{
      this.controlData = this.http.get<ProductData[]>(`${this.baseURL}/consultar-produtos/`)
      return this.controlData
    }


  deleteProduct(product: ProductData): Observable<ProductData> {
    this.controlData =this
                      .http
                      .delete
                      <ProductData>(
      `${this.baseURL}/deletar-produto/${product.id}`
    );
    return this.controlData;
  }

  getProduct(productId: number): Observable<ProductData> {
    this.controlData =this
                      .http
                      .get<ProductData>(
      `${this.baseURL}/consultar-produto/${productId}`
    );
    return this.controlData;
  }

  postProduct(product:ProductData):Observable<ProductData>{
    console.log(product);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this
    .http
    .post
    <ProductData>
    (`${this.baseURL}/cadastrar-produto`,JSON.stringify(product), httpOptions)
  }

  editProduct(product:ProductData):Observable<ProductData>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(product.id);
    return this
    .http
    .put
    <ProductData>
    (`${this.baseURL}/atualizar-produto/${product.id}`,JSON.stringify(product),httpOptions)
  }
}
