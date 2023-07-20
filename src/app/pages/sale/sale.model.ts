import {Product} from "../product/product.model";
import {Moth} from "../../shared/moth.enum";

export class Sale {
  id?: number;
  product?: Product;
  amount?: string;
  price?: string;
  moth?: Moth;
  year?: string;
}
