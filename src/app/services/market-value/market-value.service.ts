import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketValueService {

  constructor() { }

  fetchMarketValue(): Observable<number> {
    console.log('service called');
    return of(100 + Math.random());
  }
}
