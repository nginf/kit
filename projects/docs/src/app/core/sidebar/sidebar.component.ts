import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarGroupComponent } from './sidebar-group/sidebar-group.component';
import { Sidebar } from './sidebar.types';
@Component({
  selector: 'app-sidebar',
  imports: [SidebarGroupComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  sidebar: Sidebar = {
    groups: [
      {
        name: 'Components',
        links: [
          { name: 'Button', path: '/components/button' },
          { name: 'Icon', path: '/components/icon' },
        ],
      },
    ],
  };
}
