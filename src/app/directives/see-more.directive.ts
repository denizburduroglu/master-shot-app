import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSeeMore]'
})
export class SeeMoreDirective {

  constructor(
    private el: ElementRef
  ) { }

}
