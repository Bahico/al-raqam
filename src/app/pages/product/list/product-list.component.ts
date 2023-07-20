import {Component, OnInit} from "@angular/core";
import {NzModalService} from "ng-zorro-antd/modal";
import {Product} from "../product.model";
import {ProductModalComponent} from "../modal/product-modal.component";
import {ProductService} from "../product.service";

@Component({
  templateUrl: 'product-list.component.html',
  providers: [NzModalService]
})

export class ProductListComponent implements OnInit{
  data: Product[];
  constructor(private readonly modalService: NzModalService, private readonly productService: ProductService) {
  }

  ngOnInit():void {
    this.productService.castProduct.subscribe((data:any) => this.data = data);
  }

  openUpdate(product?: Product):void {
    this.modalService.create({
      nzContent: ProductModalComponent,
      nzFooter: null,
      nzMaskClosable: false,
      nzComponentParams: {product}
    });
  }

  delete(product: Product):void {
    this.productService.deleteProduct(product);
  }
}
