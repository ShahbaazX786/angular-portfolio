import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contacts = [
    {
      class: 'fa-brands fa-twitter',
      social: 'Twitter',
      username: 'Give me a follow',
      color: '#222222',
      iconColor: '#1DA1F2',
      link: 'https://twitter.com/Animeboi92',
    },
    {
      class: 'fa-solid fa-envelope',
      social: 'E-Mail',
      username: 'Drop me a Mail',
      color: '#660066',
      iconColor: '#6e5494',
      link: 'mailto:trav62031@gmail.com',
    },
    {
      class: 'fa-brands fa-github',
      social: 'Github',
      username: 'Follow me on Github',
      color: 'goldenrod',
      iconColor: 'black',
      link: 'https://github.com/ShahbaazX786',
    },
    {
      class: 'fa-brands fa-linkedin',
      social: 'LinkedIn',
      username: "Let's Connect on LinkedIn",
      color: '#0072b1',
      iconColor: '#85b2ff',
      link: 'https://linkedin.com/in/shaik-shahbaaz-alam',
    },
  ];
}
