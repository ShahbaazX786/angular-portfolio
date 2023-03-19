import { Component, HostListener, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _helper: HelperService) {}

  instagram = 'https://www.instagram.com/animeboikhan2/';
  twitter = 'https://twitter.com/Animeboi92';
  linkedin = 'https://linkedin.com/in/shaik-shahbaaz-alam';
  navbarfixed : boolean = false;

  ngOnInit() {}

  navigateTo(status: string): void {
    this._helper.navigate.emit(status);
  }

  reset() {
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    var lastScrollTop=-1;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // if (window.scrollY > 100) {
      //   this.navbarfixed = true;
      // }
      // else{
        //   this.navbarfixed = false;
        // }

        if (scrollTop > lastScrollTop) {
          this.navbarfixed = true;
        } else {
          this.navbarfixed = false;
        }
        lastScrollTop = scrollTop;
  }
}
