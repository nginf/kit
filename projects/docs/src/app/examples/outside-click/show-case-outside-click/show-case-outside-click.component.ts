import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OutsideClickDirective } from '@nginf/kit';

@Component({
  selector: 'app-show-case-outside-click',
  imports: [OutsideClickDirective],
  templateUrl: './show-case-outside-click.component.html',
  styleUrl: './show-case-outside-click.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseOutsideClickComponent {
  clicked() {
    alert('clicked');
  }
}
