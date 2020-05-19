import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
}) 
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }
  createProduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  getProduct() {
    return this.http.get(this.baseURL);
  }
  
  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
