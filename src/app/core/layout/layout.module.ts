import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InputTextModule,
    MenubarModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
