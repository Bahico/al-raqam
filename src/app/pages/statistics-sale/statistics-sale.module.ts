import {NgModule} from "@angular/core";
import {StatisticsSaleComponent} from "./statistics-sale.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {RouterModule, Routes} from "@angular/router";
import {JsonPipe, NgIf} from "@angular/common";
import {NgChartsModule} from "ng2-charts";

const routes: Routes = [{
  path: '',
  component: StatisticsSaleComponent,
  title: 'Statistics Sale',
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzTableModule,
    JsonPipe,
    NgIf,
    NgChartsModule
  ],
  exports: [
    StatisticsSaleComponent
  ],
  declarations: [StatisticsSaleComponent]
})

export class StatisticsSaleModule {}
