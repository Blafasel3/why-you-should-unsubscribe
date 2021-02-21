import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen = false;
  numberOfCalls = 0;

  onToggle(): void {
    this.isOpen = !this.isOpen;
  }

  onServiceCalled(numberOfCalls: number): void {
    this.numberOfCalls = numberOfCalls;
  }
}
