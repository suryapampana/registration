import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpManagerComponent } from './cdp-manager.component';

describe('CdpManagerComponent', () => {
  let component: CdpManagerComponent;
  let fixture: ComponentFixture<CdpManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdpManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdpManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
