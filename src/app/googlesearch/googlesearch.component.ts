import { Component } from '@angular/core';

@Component({
  selector: 'app-googlesearch',
  templateUrl: './googlesearch.component.html',
  styleUrls: ['./googlesearch.component.css'],
})
export class GooglesearchComponent {
  search(value: string): void {
    const query = value.trim();
    if (!query) return;

    const looksLikeUrl =
      /^https?:\/\//i.test(query) || (/^[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(query) && !query.includes(' '));

    window.location.href = looksLikeUrl
      ? /^https?:\/\//i.test(query)
        ? query
        : `https://${query}`
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}
