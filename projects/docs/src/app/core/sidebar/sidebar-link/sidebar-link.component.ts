import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarLink } from '../sidebar.types';

@Component({
  selector: 'app-sidebar-link',
  imports: [RouterLink],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLinkComponent {
  link = input.required<SidebarLink>();
}
