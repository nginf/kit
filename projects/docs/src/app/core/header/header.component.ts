import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubIcon, MenuIcon } from '@nginf/iconic-lu';
import { ButtonIconDirective } from '../button/button-icon.directive';
@Component({
  selector: 'app-header',
  imports: [MenuIcon, ButtonIconDirective, GithubIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
