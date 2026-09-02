import { Component } from '@angular/core';

interface QuickLink {
  name: string;
  url: string;
  icon: string;
}

const DEFAULT_LINKS: QuickLink[] = [
  { name: 'Gmail', url: 'https://mail.google.com', icon: 'fa-solid fa-envelope' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'fa-brands fa-youtube' },
  { name: 'GitHub', url: 'https://github.com', icon: 'fa-brands fa-github' },
  { name: 'X', url: 'https://x.com', icon: 'fa-brands fa-x-twitter' },
  { name: 'Reddit', url: 'https://reddit.com', icon: 'fa-brands fa-reddit-alien' },
];

@Component({
  selector: 'app-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.css'],
})
export class QuicklinksComponent {
  links = DEFAULT_LINKS;
}
