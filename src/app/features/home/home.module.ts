import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {CarouselModule} from "../../shared/carousel/carousel.module";
import {CardModule} from "../../shared/card/card.module";

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
