import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./list/product-list.component";
import {ProductModalComponent} from "./modal/product-modal.component";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {ReactiveFormsModule} from "@angular/forms";
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
  component: ProductListComponent,
  title: 'Product',
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
        TranslateModule
    ],
  declarations: [ProductListComponent, ProductModalComponent]
})

export class ProductModule {

}
