import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarketValueService } from '../services/market-value/market-value.service';

@Component({
  selector: 'app-not-unsubscribing',
  templateUrl: './not-unsubscribing.component.html',
  styleUrls: ['./not-unsubscribing.component.css']
})
export class NotUnsubscribingComponent implements OnInit, OnDestroy {

  currentValue: number = 0;
  subscription: Subscription | undefined;

  constructor(private marketValueService: MarketValueService) {
    
  }

  ngOnInit(): void {
    /**
     * Interval is used to update the data in an interval in order 
     * to keep the user informed about the current value.
     * It could trigger basically anything such as an 
     * http call to retrieve some values from the backend or somehting like that.
     */
    this.subscription = interval(1000).pipe(
      switchMap(() => this.marketValueService.fetchMarketValue())
    ).subscribe(value => this.currentValue = value);
  }

  ngOnDestroy(): void {
    // FIXME
    // this.subscription?.unsubscribe();
  }
}
