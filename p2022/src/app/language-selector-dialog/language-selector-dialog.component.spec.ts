import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectorDialogComponent } from './language-selector-dialog.component';

describe('LanguageSelectorDialogComponent', () => {
  let component: LanguageSelectorDialogComponent;
  let fixture: ComponentFixture<LanguageSelectorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSelectorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
