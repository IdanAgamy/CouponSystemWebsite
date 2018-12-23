import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenueComponent } from './profile-menue.component';

describe('ProfileMenueComponent', () => {
  let component: ProfileMenueComponent;
  let fixture: ComponentFixture<ProfileMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
