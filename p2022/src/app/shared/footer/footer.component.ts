import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  language:string='English';

  locale:string='English';

  languageList: any = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'Urdu' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ja', name: 'Japanese' },
    { code: 'te', name: 'Telugu' },
  ];

  ngOnInit(){
    this.locale=window.location.pathname.split('/')[2];
    this.language=this.languageList.find((f: { code: string | undefined; })=>f.code===this.locale).name;
  }

}
