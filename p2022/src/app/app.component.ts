import { HelperService } from 'src/app/helper.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'p2022';

  @ViewChild('hero', { static: false }) hero!: ElementRef;
  @ViewChild('about', { static: false }) about!: ElementRef;
  @ViewChild('services', { static: false }) services!: ElementRef;
  @ViewChild('skills', { static: false }) skills!: ElementRef;
  @ViewChild('experience', { static: false }) experience!: ElementRef;
  @ViewChild('projects', { static: false }) projects!: ElementRef;
  @ViewChild('portfolio', { static: false }) portfolio!: ElementRef;
  @ViewChild('hobby', { static: false }) hobby!: ElementRef;
  @ViewChild('contact', { static: false }) contact!: ElementRef;
  @ViewChild('pnf', { static: false }) pnf!: ElementRef;

  constructor(private _helper: HelperService) {
    this._helper.navigate.subscribe((status: string) => {
      this[status].nativeElement.scrollIntoView({
        behaviour: 'auto',
        block: 'center',
        inline: 'center',
      });
    });
  }
}
