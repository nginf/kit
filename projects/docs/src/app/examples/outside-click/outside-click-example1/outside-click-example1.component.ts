import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-outside-click-example1',
  imports: [],
  templateUrl: './outside-click-example1.component.html',
  styleUrl: './outside-click-example1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutsideClickExample1Component {}
