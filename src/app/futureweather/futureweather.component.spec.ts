import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureweatherComponent } from './futureweather.component';

describe('FutureweatherComponent', () => {
  let component: FutureweatherComponent;
  let fixture: ComponentFixture<FutureweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
