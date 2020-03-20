import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORIES_WITH_PRODUCTS } from './categories';
import { ALL_PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  categories = CATEGORIES_WITH_PRODUCTS;
  products = ALL_PRODUCTS;

  getCategories(): Observable<any> {
    return of(this.categories);
  }

  getProductsByCategoryId(categoryId): Observable<any> {
    const neededCategory = this.categories.find(category => category.id === categoryId);
    return of(neededCategory.products);
  }

  getProductsByCategoryIdFromAllProducts(categoryId): Observable<any> {
    const neededProducts = this.products.filter(product => product.categoryId === categoryId);
    return of(neededProducts);
  }

  getProductById(id): Observable<any> {
    const neededProduct = this.products.find(item => item.id === id);
    return of(neededProduct);
  }

  constructor() { }
}
