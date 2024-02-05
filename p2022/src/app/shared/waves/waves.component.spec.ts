import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesComponent } from './waves.component';

describe('WavesComponent', () => {
  let component: WavesComponent;
  let fixture: ComponentFixture<WavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
