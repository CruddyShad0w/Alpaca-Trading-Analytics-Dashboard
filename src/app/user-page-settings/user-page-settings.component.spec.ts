import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageSettingsComponent } from './user-page-settings.component';

describe('UserPageSettingsComponent', () => {
  let component: UserPageSettingsComponent;
  let fixture: ComponentFixture<UserPageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
