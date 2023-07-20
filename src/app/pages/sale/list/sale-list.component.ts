import {Component, OnInit} from "@angular/core";
import {NzModalService} from "ng-zorro-antd/modal";
import {Sale} from "../sale.model";
import {SaleModalComponent} from "../modal/sale-modal.component";
import {SaleService} from "../sale.service";

@Component({
  templateUrl: 'sale-list.component.html',
  providers: [NzModalService]
})

export class SaleListComponent implements OnInit{
  data: Sale[];
  constructor(private readonly modalService: NzModalService,
              private readonly saleService: SaleService) {
  }

  ngOnInit():void {
    this.saleService.castSale.subscribe((data:any) => this.data = data);
  }

  openUpdate(sale?: Sale):void {
    this.modalService.create({
      nzContent: SaleModalComponent,
      nzFooter: null,
      nzMaskClosable: false,
      nzComponentParams: {sale}
    });
  }

  delete(sale: Sale):void {
    this.saleService.deleteSale(sale);
  }
}
