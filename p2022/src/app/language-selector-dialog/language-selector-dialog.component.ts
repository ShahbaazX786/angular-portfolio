import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector-dialog',
  templateUrl: './language-selector-dialog.component.html',
  styleUrls: ['./language-selector-dialog.component.css'],
})
export class LanguageSelectorDialogComponent implements OnInit {
  language: string = 'English';

  locale: string = 'English';

  languageList: any = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'Urdu' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ja', name: 'Japanese' },
    { code: 'te', name: 'Telugu' },
  ];

  ngOnInit() {
    this.language = 'English';
    this.locale = window.location.pathname.split('/')[2];
    this.language = this.languageList.find(
      (f: { code: string | undefined }) => f.code === this.locale
    ).name;
  }
}
