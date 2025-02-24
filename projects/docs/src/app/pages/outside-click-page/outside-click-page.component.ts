import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocExampleItemComponent } from '../../core/doc-page/doc-example-item/doc-example-item.component';
import { DocExamplesSectionComponent } from '../../core/doc-page/doc-examples-section/doc-examples-section.component';
import { DocOverviewSectionComponent } from '../../core/doc-page/doc-overview-section/doc-overview-section.component';
import { DocPageComponent } from '../../core/doc-page/doc-page.component';
import { ApiSection } from '../../core/doc-page/doc-page.types';
import { OutsideClickExample1Component } from '../../examples/outside-click/outside-click-example1/outside-click-example1.component';

@Component({
  selector: 'app-outside-click-page',
  imports: [
    DocPageComponent,
    DocOverviewSectionComponent,
    DocExamplesSectionComponent,
    DocExampleItemComponent,
    OutsideClickExample1Component,
  ],
  templateUrl: './outside-click-page.component.html',
  styleUrl: './outside-click-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutsideClickPageComponent {
  apiSection: ApiSection = {
    directives: [
      {
        name: 'OutsideClickDirective',
        selector: '[ktOutsideClick]',
        description:
          '`OutisdeClick` directive is used to get notified when the element is clicked outisde the element',
        inputs: [
          {
            name: 'emitOnce',
            description:
              'when true, disables OutsideClick after emits for the first time',
            type: 'boolean',
          },
        ],
        outputs: [
          {
            name: 'ktOutsideClick',
            description: 'emits when backdrop clicked',
            type: 'void',
          },
        ],
      },
    ],
  };
}
