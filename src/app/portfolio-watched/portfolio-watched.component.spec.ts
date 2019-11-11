import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWatchedComponent } from './portfolio-watched.component';

describe('PortfolioWatchedComponent', () => {
  let component: PortfolioWatchedComponent;
  let fixture: ComponentFixture<PortfolioWatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
