import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNowCardComponent } from './active-now-card.component';

describe('ActiveNowCardComponent', () => {
  let component: ActiveNowCardComponent;
  let fixture: ComponentFixture<ActiveNowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveNowCardComponent]
    });
    fixture = TestBed.createComponent(ActiveNowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
