import {Component, OnInit} from "@angular/core";
import {Status} from "../../../shared/status.enum";
import {UntypedFormBuilder} from "@angular/forms";
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  templateUrl: 'product-modal.component.html'
})

export class ProductModalComponent implements OnInit {
  product!: Product;
  updateForm = this.fb.group({
    productName: [null],
    brand: [null],
    price: [null],
    status: [null]
  });
  statuses = Object.keys(Status);
  constructor(private fb: UntypedFormBuilder,
              private readonly modalService: NzModalService,
              private readonly productService: ProductService) {
  }

  ngOnInit():void {
    if (this.product) {
      this.updateForm.patchValue({
        ...this.product
      })
    }
  }

  submit():void {
    if (!this.product) {
      this.productService.addProduct(this.updateForm.value);
    } else {
      this.productService.updateProduct(this.product, this.updateForm.value);
    }
    this.modalService.closeAll();
  }

}
