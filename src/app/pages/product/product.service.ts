import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "./product.model";
import {Init} from "../../shared/init-product";

@Injectable({
  providedIn: 'root'
})

export class ProductService extends Init{
  localProducts = JSON.parse(localStorage.getItem('products')) || [];
  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.localProducts);
  castProduct: Observable<Product[]> = this.products.asObservable();
  constructor() {
    super();
    // this.load('products');
  }

  updateLocalStorage(localProducts: Product[]):void {
    localStorage.setItem('products', JSON.stringify(localProducts));
    this.products.next(localProducts);
  }

  addProduct(newProduct: any) {
    this.localProducts.push(newProduct);
    this.updateLocalStorage(this.localProducts);
  }

  updateProduct(item: Product, updateProduct: Product):void {
    const index = this.localProducts.indexOf(item);
    if (this.localProducts[index] === item) this.localProducts[index] = updateProduct;
    this.updateLocalStorage(this.localProducts);
  }

  deleteProduct(item: Product):void {
    const index = this.localProducts.indexOf(item);
    if (index > -1) this.localProducts.splice(index, 1);
    this.updateLocalStorage(this.localProducts);
  }
}
