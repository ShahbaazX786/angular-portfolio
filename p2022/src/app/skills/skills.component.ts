import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills = [
    {
      name: 'HTML',
      src: '../../assets/img/external/svg/html.svg',
    },
    {
      name: 'CSS',
      src: '../../assets/img/external/svg/css..svg',
    },
    {
      name: 'Javascript',
      src: '../../assets/img/external/svg/javascript.svg',
    },
    {
      name: 'MongoDB',
      src: '../../assets/img/external/svg/mongodb.svg',
    },
    {
      name: 'API',
      src: '../../assets/img/external/svg/api.svg',
    },
    {
      name: 'Bootstrap',
      src: '../../assets/img/external/svg/bootstrap.svg',
    },
    {
      name: 'Bulma css',
      src: '../../assets/img/external/svg/bulma..svg',
    },
    {
      name: 'Express JS',
      src: '../../assets/img/external/svg/express-js.svg',
    },
    {
      name: 'Figma',
      src: '../../assets/img/external/svg/figma..svg',
    },
    {
      name: 'Firebase',
      src: '../../assets/img/external/svg/firebase.svg',
    },
    {
      name: 'Git',
      src: '../../assets/img/external/svg/git..svg',
    },
    {
      name: 'Material UI',
      src: '../../assets/img/external/svg/mui..svg',
    },
    {
      name: 'Node JS',
      src: '../../assets/img/external/svg/nodejs.svg',
    },
    {
      name: 'Photoshop',
      src: '../../assets/img/external/svg/photoshop.svg',
    },
    {
      name: 'SQL',
      src: '../../assets/img/external/svg/sql.svg',
    },
    {
      name: 'Angular',
      src: '../../assets/img/external/svg/angular.svg',
    },
    {
      name: 'AWS',
      src: '../../assets/img/external/svg/aws.svg',
    },
    {
      name: 'Tailwind CSS',
      src: '../../assets/img/external/svg/tailwind..svg',
    },
    {
      name: 'SEO',
      src: '../../assets/img/external/svg/seo.svg',
    },
    {
      name: 'Jest',
      src: '../../assets/img/external/svg/jest.svg',
    },
  ];
}
