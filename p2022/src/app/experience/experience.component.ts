import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contacts = [
    {
      class: 'fa-brands fa-twitter',
      social: 'Twitter',
      username: 'ShahbaazX',
    },
    {
      class: 'fa-solid fa-envelope',
      social: 'Contact Me',
      username: 'Drop me a Mail',
    },
    {
      class: 'fa-brands fa-github',
      social: 'Github',
      username: 'ShahbaazX786',
    },
    {
      class: 'fa-brands fa-linkedin',
      social: 'LinkedIn',
      username: 'Shaik Shahbaaz Alam',
    },
  ];
}
