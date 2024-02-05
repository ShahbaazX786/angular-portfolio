import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumComponent } from './medium.component';

describe('MediumComponent', () => {
  let component: MediumComponent;
  let fixture: ComponentFixture<MediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
