import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule, BsDatepickerModule, BsDropdownModule, ButtonsModule, CarouselModule, ModalModule, OffcanvasModule, PaginationModule, ProgressbarModule, RatingModule, SortableModule, TabsModule } from 'ngx-foundation';


@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    OffcanvasModule
  ],
  exports: [
    AlertModule,
    ButtonsModule,
    CarouselModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    OffcanvasModule
  ]
})
export class FoundationModule { }
