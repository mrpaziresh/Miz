import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
  digitalTime = '';
  private timer: any;

  ngOnInit(): void {
    this.updateClock();
    this.timer = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDegree = seconds * 6; // 360deg / 60 seconds
    const minuteDegree = minutes * 6 + seconds * 0.1; // 360deg / 60 minutes + second fraction
    const hourDegree = hours * 30 + minutes * 0.5; // 360deg / 12 hours + minute fraction

    // Apply the rotation to clock hands
    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    if (secondHand && minuteHand && hourHand) {
      secondHand.style.transform = `rotate(${secondDegree}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    this.digitalTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
