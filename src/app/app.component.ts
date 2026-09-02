import { Component, OnDestroy, OnInit } from '@angular/core';

const QUOTES = [
  'Simplicity is the ultimate sophistication.',
  'Small steps every day add up to big change.',
  'Focus on what matters, let go of the rest.',
  'Done is better than perfect.',
  'Your future is created by what you do today.',
  'Clarity comes from action, not thought.',
  'Make it simple, but significant.',
  'A calm mind gets more done.',
  'Progress, not perfection.',
  'The best time to start was yesterday. The next best time is now.',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Miz';
  greeting = '';
  dateLabel = '';
  quote = '';
  private timer: any;

  ngOnInit(): void {
    this.updateGreeting();
    this.quote = this.pickQuoteOfDay();
    this.timer = setInterval(() => this.updateGreeting(), 60000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateGreeting(): void {
    const now = new Date();
    const hour = now.getHours();
    this.greeting =
      hour < 5
        ? 'Good night'
        : hour < 12
        ? 'Good morning'
        : hour < 18
        ? 'Good afternoon'
        : 'Good evening';
    this.dateLabel = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  private pickQuoteOfDay(): string {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000);
    return QUOTES[dayOfYear % QUOTES.length];
  }
}
