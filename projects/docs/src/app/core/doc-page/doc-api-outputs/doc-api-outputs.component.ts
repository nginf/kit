import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ApiOutput } from '../doc-page.types';

@Component({
  selector: 'app-doc-api-outputs',
  imports: [],
  templateUrl: './doc-api-outputs.component.html',
  styleUrl: './doc-api-outputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocApiOutputsComponent {
  apiOutputs = input.required<ApiOutput[]>();
}
