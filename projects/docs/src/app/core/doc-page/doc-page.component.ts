import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { DocApiSectionComponent } from './doc-api-section/doc-api-section.component';
import { ApiSection } from './doc-page.types';

@Component({
  selector: 'app-doc-page',
  imports: [DocApiSectionComponent],
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPageComponent {
  tabs = ['Overview', 'API', 'Examples'];
  activeTab = signal<string>('Overview');
  label = input.required<string>();

  apiSection = input.required<ApiSection>();

  selectTab(tab: string) {
    this.activeTab.set(tab);
  }
}
