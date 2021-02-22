import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeadersComponent } from './headers/headers.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeadersComponent
  ],
  exports: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
