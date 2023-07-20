import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SaleListComponent} from "./list/sale-list.component";
import {SaleModalComponent} from "./modal/sale-modal.component";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NgForOf, NgIf} from "@angular/common";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {IconsProviderModule} from "../../icons-provider.module";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [{
  path: '',
  component: SaleListComponent,
  title: 'Sale',
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NzInputNumberModule,
        ReactiveFormsModule,
        NzFormModule,
        NzSelectModule,
        NzInputModule,
        NzButtonModule,
        NgForOf,
        NgIf,
        NzTableModule,
        NzPopconfirmModule,
        NzEmptyModule,
        NzSpinModule,
        IconsProviderModule,
        FormsModule,
        TranslateModule
    ],
  declarations: [SaleListComponent, SaleModalComponent]
})

export class SaleModule {

}
