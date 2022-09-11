import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfComponent } from './pnf.component';

describe('PnfComponent', () => {
  let component: PnfComponent;
  let fixture: ComponentFixture<PnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
