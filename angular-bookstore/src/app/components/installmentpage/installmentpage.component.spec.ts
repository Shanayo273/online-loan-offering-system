import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentpageComponent } from './installmentpage.component';

describe('InstallmentpageComponent', () => {
  let component: InstallmentpageComponent;
  let fixture: ComponentFixture<InstallmentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
