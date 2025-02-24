import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ApiInput } from '../doc-page.types';

@Component({
  selector: 'app-doc-api-inputs',
  imports: [],
  templateUrl: './doc-api-inputs.component.html',
  styleUrl: './doc-api-inputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocApiInputsComponent {
  apiInputs = input.required<ApiInput[]>();
}
