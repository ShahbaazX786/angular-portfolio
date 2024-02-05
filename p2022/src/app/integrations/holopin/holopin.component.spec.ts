import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolopinComponent } from './holopin.component';

describe('HolopinComponent', () => {
  let component: HolopinComponent;
  let fixture: ComponentFixture<HolopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolopinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
