import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-doc-example-item',
  imports: [],
  templateUrl: './doc-example-item.component.html',
  styleUrl: './doc-example-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocExampleItemComponent {
  name = input.required<string>();
  tabs = ['PREVIEW', 'HTML', 'TS', 'CSS'];
  activeTab = signal<string>(this.tabs[0]);
  private http = inject(HttpClient);

  tabChange(tab: string) {
    if (tab !== 'PREVIEW') {
      this.http
        .get(`examples/outside-click/outside-click-example1.component.html`, {
          responseType: 'text',
        })
        .subscribe((data) => {
          console.log(data);
        });
    }

    this.activeTab.set(tab);
  }
}
