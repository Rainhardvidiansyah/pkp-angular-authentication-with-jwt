import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product, ProductResponse } from "../../core/models/product.model";


@Injectable({
  providedIn: "root"
})
export class ProductService{

  constructor(private readonly http: HttpClient){}

  private baseUrl = 'https://dummyjson.com/products';

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  searchProducts(query: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/search?q=${query}`);
  }
}