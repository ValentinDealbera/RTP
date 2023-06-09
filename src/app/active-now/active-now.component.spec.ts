import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNowComponent } from './active-now.component';

describe('ActiveNowComponent', () => {
  let component: ActiveNowComponent;
  let fixture: ComponentFixture<ActiveNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveNowComponent]
    });
    fixture = TestBed.createComponent(ActiveNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
