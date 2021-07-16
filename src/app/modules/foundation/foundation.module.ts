import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule, BsDatepickerModule, BsDropdownModule, ButtonsModule, CarouselModule, ModalModule, PaginationModule, ProgressbarModule, RatingModule, SortableModule, TabsModule } from 'ngx-foundation';


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
    TabsModule
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
    TabsModule
  ]
})
export class FoundationModule { }
