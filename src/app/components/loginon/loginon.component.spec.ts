import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginonComponent } from './loginon.component';

describe('LoginonComponent', () => {
  let component: LoginonComponent;
  let fixture: ComponentFixture<LoginonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
