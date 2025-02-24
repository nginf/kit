import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DocApiInputsComponent } from '../doc-api-inputs/doc-api-inputs.component';
import { DocApiOutputsComponent } from '../doc-api-outputs/doc-api-outputs.component';
import { ApiSection } from '../doc-page.types';

@Component({
  selector: 'app-doc-api-section',
  imports: [DocApiInputsComponent, DocApiOutputsComponent],
  templateUrl: './doc-api-section.component.html',
  styleUrl: './doc-api-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocApiSectionComponent {
  apiSection = input.required<ApiSection>();
}
