import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductData } from 'src/app/models/productData';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL: string = 'http://localhost:3000'; // URL do seu JSON Server

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(`${this.baseURL}/products`);
  }

  deleteProduct(product: ProductData): Observable<ProductData> {
    return this.http.delete<ProductData>(
      `${this.baseURL}/products/${product.id}`
    );
  }

  getProduct(productId: number): Observable<ProductData> {
    return this.http.get<ProductData>(`${this.baseURL}/products/${productId}`);
  }

  postProduct(product: ProductData): Observable<ProductData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<ProductData>(
      `${this.baseURL}/products`,
      product,
      httpOptions
    );
  }

  editProduct(product: ProductData): Observable<ProductData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<ProductData>(
      `${this.baseURL}/products/${product.id}`,
      product,
      httpOptions
    );
  }
}
