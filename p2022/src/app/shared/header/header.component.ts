import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  instagram = 'https://www.instagram.com/animeboikhan2/';
  twitter = 'https://twitter.com/Animeboi92';
  linkedin = 'https://linkedin.com/in/shaik-shahbaaz-alam';

  ngOnInit(): void {
  }

}
