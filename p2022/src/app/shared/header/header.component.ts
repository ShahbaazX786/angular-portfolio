import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  instagram = 'https://www.instagram.com/animeboikhan2/';
  twitter = 'https://twitter.com/Animeboi92';
  linkedin = 'https://linkedin.com/in/shaik-shahbaaz-alam';
  // public navbarfixed!:boolean;
  // public lastScrollTop = 0;
  // public scrollTop = 0;

  ngOnInit() {}

  // navigateTo(status: string): void {
  //   this._helper.navigate.emit(status);
  // }

  reset() {
    window.scroll(0, 0);
  }

  // @HostListener('window:scroll', ['$event']) onscroll() {
  //   this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (this.scrollTop > this.lastScrollTop) {
  //     this.navbarfixed = true;
  //   } else {
  //     this.navbarfixed = false;
  //   }
  //   this.lastScrollTop=this.scrollTop;
  // }
}
