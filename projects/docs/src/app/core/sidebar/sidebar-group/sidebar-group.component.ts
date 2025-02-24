import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';
import { SidebarGroup } from '../sidebar.types';

@Component({
  selector: 'app-sidebar-group',
  imports: [SidebarLinkComponent],
  templateUrl: './sidebar-group.component.html',
  styleUrl: './sidebar-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarGroupComponent {
  group = input.required<SidebarGroup>();
}
