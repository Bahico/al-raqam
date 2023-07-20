import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder} from "@angular/forms";
import {Sale} from "../sale.model";
import {SaleService} from "../sale.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {ProductService} from "../../product/product.service";
import {Product} from "../../product/product.model";
import {Moth} from "../../../shared/moth.enum";

@Component({
  templateUrl: 'sale-modal.component.html'
})

export class SaleModalComponent implements OnInit {
  sale!: Sale;
  products: Product[];
  productPrice: string;
  price: any;
  moth = Object.keys(Moth);
  updateForm = this.fb.group({
    product: [null],
    amount: [null],
    price: [null],
    moth: [null],
    year: [null]
  });
  constructor(private fb: UntypedFormBuilder,
              private readonly modalService: NzModalService,
              private readonly productService: ProductService,
              private readonly saleService: SaleService) {
  }

  ngOnInit():void {
    this.updateForm.get('amount')?.disable();
    this.productService.castProduct.subscribe((data:any) => this.products = data);
    if (this.sale) {
      this.price = this.sale.price;
      this.updateForm.patchValue({
        ...this.sale
      })
    }
  }

  selectProduct(item: Product) {
    this.productPrice = item.price;
    this.updateForm.get('amount')?.enable();
  }

  amountValue(event: any):void {
    this.price = Number(event.target.value) * Number(this.productPrice);
  }

  submit():void {
    this.updateForm.patchValue({
      price: String(this.price)
    })
    if (!this.sale) {
      this.saleService.addSale(this.updateForm.value);
    } else {
      this.saleService.updateSale(this.sale, this.updateForm.value);
    }
    this.modalService.closeAll();
  }
}
