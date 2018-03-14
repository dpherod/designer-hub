import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireProtectionRfpComponent } from './fire-protection-rfp.component';

describe('FireProtectionRfpComponent', () => {
  let component: FireProtectionRfpComponent;
  let fixture: ComponentFixture<FireProtectionRfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireProtectionRfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireProtectionRfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
