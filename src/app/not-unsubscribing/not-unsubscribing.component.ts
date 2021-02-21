import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-not-unsubscribing',
  templateUrl: './not-unsubscribing.component.html',
  styleUrls: ['./not-unsubscribing.component.css']
})
export class NotUnsubscribingComponent implements OnInit, OnDestroy {

  @Output()
  asyncServiceCalled: EventEmitter<number> = new EventEmitter<number>();

  currentValue: number = Math.random() * 100;
  subscription: Subscription | undefined;

  ngOnInit(): void {
    /**
     * Interval is used to update the data in an interval in order 
     * to keep the user informed about the current value.
     * It could trigger basically anything such as an 
     * http call to retrieve some values from the backend or somehting like that.
     */
    this.subscription = interval(1000) 
    .pipe(
      tap(i => this.handleServiceCallEvent(i)),
      switchMap(() => this.callService())
    ).subscribe(value => this.currentValue = value);
  }

  ngOnDestroy(): void {
    // FIXME
    // this.subscription?.unsubscribe();
  }

  handleServiceCallEvent(i: number): void {
    this.asyncServiceCalled.emit(i);
    console.log('service called');
  }

  callService(): Observable<number> {
    return of(Math.random() * 100); // this could be anything, e.g. a HTTP Call
  }

}
