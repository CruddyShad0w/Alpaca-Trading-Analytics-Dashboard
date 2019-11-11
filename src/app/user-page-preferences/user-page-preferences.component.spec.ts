import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagePreferencesComponent } from './user-page-preferences.component';

describe('UserPagePreferencesComponent', () => {
  let component: UserPagePreferencesComponent;
  let fixture: ComponentFixture<UserPagePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPagePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
