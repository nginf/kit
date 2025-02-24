import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kt-kit',
  imports: [],
  template: ` <p>kit works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ktComponent {}
