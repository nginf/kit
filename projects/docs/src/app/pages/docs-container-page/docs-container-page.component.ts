import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-docs-container-page',
  imports: [SidebarComponent],
  templateUrl: './docs-container-page.component.html',
  styleUrl: './docs-container-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsContainerPageComponent {}
