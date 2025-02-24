import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocPageComponent } from '../../core/doc-page/doc-page.component';
import { ApiSection } from '../../core/doc-page/doc-page.types';

@Component({
  selector: 'app-outside-click-page',
  imports: [DocPageComponent],
  templateUrl: './outside-click-page.component.html',
  styleUrl: './outside-click-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutsideClickPageComponent {
  apiSection: ApiSection = {
    directives: [
      {
        name: 'OutsideClick',
        selector: '[ktOutsideClick]',
        descritpion:
          '`OutisdeClick` directive is used to get notified when the element is clicked outisde the element',
        inputs: [
          {
            name: 'toggle',
            description: 'Best description',
            default: false,
            required: true,
            type: 'boolean',
          },
        ],
        outputs: [
          {
            name: 'clicked',
            description: 'emits when backdrop clicked',
            type: 'void',
          },
        ],
      },
    ],
  };
}
