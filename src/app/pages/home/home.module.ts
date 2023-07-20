import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import {StatisticsSaleModule} from "../statistics-sale/statistics-sale.module";


@NgModule({
    imports: [HomeRoutingModule, StatisticsSaleModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
