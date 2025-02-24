import { DOCUMENT } from '@angular/common';
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
} from '@angular/core';
import { isEscapeKey } from '../is-key/is-key';
import { isOutsideClick } from './is-outside-click';

@Directive({
  selector: '[ktOutsideClick]',
})
export class OutsideClickDirective implements OnDestroy {
  disableOutsideClick = input<boolean>();
  emitOnce = input<boolean>();

  triggered = output<void>({ alias: 'ktOutsideClick' });

  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;

  private readonly document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      const disable = this.disableOutsideClick();
      if (disable) {
        this.turnOff();
      } else {
        this.turnOn();
      }
    });
  }

  clicked($event: MouseEvent) {
    if (isOutsideClick(this.element, $event)) {
      this.triggered.emit();
    }
  }

  turnOn() {
    this.turnOff();
    this.document.addEventListener('click', this.clickListener.bind(this));
    this.document.addEventListener('keydown', this.escapeListener.bind(this));
  }

  turnOff() {
    this.document.removeEventListener(
      'keydown',
      this.escapeListener.bind(this)
    );
    this.document.removeEventListener(
      'keydown',
      this.escapeListener.bind(this)
    );
  }

  ngOnDestroy(): void {
    this.turnOff();
  }

  private clickListener(event: MouseEvent) {
    if (isOutsideClick(this.element, event)) {
      this.emit();
    }
  }

  private escapeListener(event: KeyboardEvent) {
    if (isEscapeKey(event)) {
      this.emit();
    }
  }

  private emit() {
    this.triggered.emit();
    if (this.emitOnce()) {
      this.turnOff();
    }
  }
}
