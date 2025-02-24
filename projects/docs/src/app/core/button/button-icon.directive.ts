import { Directive } from '@angular/core';

@Directive({
  selector: '[appButtonIcon]',
  host: {
    class: 'cursor-pointer p-2 hover:bg-stone-100 rounded-full',
  },
})
export class ButtonIconDirective {}
