import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-docs-container-page',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './docs-container-page.component.html',
  styleUrl: './docs-container-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsContainerPageComponent {}
