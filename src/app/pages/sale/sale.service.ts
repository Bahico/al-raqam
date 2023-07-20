import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Sale} from "./sale.model";
import {Init} from "../../shared/init-product";

@Injectable({
  providedIn: 'root'
})

export class SaleService extends Init{
  localSales = JSON.parse(localStorage.getItem('sale')) || [];
  private sales: BehaviorSubject<Sale[]> = new BehaviorSubject<Sale[]>(this.localSales);
  castSale: Observable<Sale[]> = this.sales.asObservable();
  constructor() {
    super();
    // this.load('sale');
  }

  updateLocalStorage(localSales: Sale[]):void {
    localStorage.setItem('sale', JSON.stringify(localSales));
    this.sales.next(localSales);
  }

  addSale(newProduct: any) {
    this.localSales.push(newProduct);
    this.updateLocalStorage(this.localSales);
  }

  updateSale(item: Sale, updateProduct: Sale):void {
    const index = this.localSales.indexOf(item);
    if (this.localSales[index] === item) this.localSales[index] = updateProduct;
    this.updateLocalStorage(this.localSales);
  }

  deleteSale(item: Sale):void {
    const index = this.localSales.indexOf(item);
    if (index > -1) this.localSales.splice(index, 1);
    this.updateLocalStorage(this.localSales);
  }
}
