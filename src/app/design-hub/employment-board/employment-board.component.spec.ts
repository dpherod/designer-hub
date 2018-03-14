import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentBoardComponent } from './employment-board.component';

describe('EmploymentBoardComponent', () => {
  let component: EmploymentBoardComponent;
  let fixture: ComponentFixture<EmploymentBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
