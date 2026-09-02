import { Component, OnInit } from '@angular/core';

interface CalendarCell {
  day: number;
  inCurrentMonth: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  private today = new Date();
  viewDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
  weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  cells: CalendarCell[] = [];

  ngOnInit(): void {
    this.buildMonth();
  }

  get monthLabel(): string {
    return this.viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  previousMonth(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1);
    this.buildMonth();
  }

  nextMonth(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
    this.buildMonth();
  }

  private buildMonth(): void {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const startOffset = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells: CalendarCell[] = [];

    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push(this.makeCell(year, month - 1, daysInPrevMonth - i, false));
    }
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(this.makeCell(year, month, day, true));
    }
    const remaining = 42 - cells.length;
    for (let day = 1; day <= remaining; day++) {
      cells.push(this.makeCell(year, month + 1, day, false));
    }

    this.cells = cells;
  }

  private makeCell(year: number, month: number, day: number, inCurrentMonth: boolean): CalendarCell {
    const date = new Date(year, month, day);
    return {
      day,
      inCurrentMonth,
      isToday: this.isSameDay(date, this.today),
    };
  }

  private isSameDay(a: Date, b: Date): boolean {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }
}
