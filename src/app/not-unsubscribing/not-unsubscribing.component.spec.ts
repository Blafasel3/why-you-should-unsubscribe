import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotUnsubscribingComponent } from './not-unsubscribing.component';

describe('NotUnsubscribingComponent', () => {
  let component: NotUnsubscribingComponent;
  let fixture: ComponentFixture<NotUnsubscribingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotUnsubscribingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotUnsubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
