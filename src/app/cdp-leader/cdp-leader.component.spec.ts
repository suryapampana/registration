import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpLeaderComponent } from './cdp-leader.component';

describe('CdpLeaderComponent', () => {
  let component: CdpLeaderComponent;
  let fixture: ComponentFixture<CdpLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdpLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdpLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
