import { Component, LOCALE_ID, Inject } from '@angular/core';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p2022';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ja', label: 'Japanese' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
  // constructor(private _titleservice:Title){
  //   this._titleservice.setTitle($localize`${this.title}`);
  // }
}
