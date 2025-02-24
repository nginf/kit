export interface SidebarGroup {
  name: string;
  links: SidebarLink[];
}

export interface SidebarLink {
  name: string;
  path: string;
}

export interface Sidebar {
  groups: SidebarGroup[];
}
