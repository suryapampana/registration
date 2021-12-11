import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpEmployeeComponent } from './cdp-employee.component';

describe('CdpEmployeeComponent', () => {
  let component: CdpEmployeeComponent;
  let fixture: ComponentFixture<CdpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdpEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
