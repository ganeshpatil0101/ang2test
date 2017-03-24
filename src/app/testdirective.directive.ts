import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

}
