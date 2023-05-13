import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills = {
    all: [
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
        name: 'Bootstrap',
        src: '../../assets/img/external/svg/bootstrap.svg',
      },
      {
        name: 'Angular',
        src: '../../assets/img/external/svg/angular.svg',
      },
      {
        name: 'Material',
        src: '../../assets/img/external/svg/angmat.svg',
      },
      {
        name: 'MongoDB',
        src: '../../assets/img/external/svg/mongodb.svg',
      },
      {
        name: 'SQL',
        src: '../../assets/img/external/svg/sql.svg',
      },
      {
        name: 'Firebase',
        src: '../../assets/img/external/svg/firebase.svg',
      },
      {
        name: 'AWS',
        src: '../../assets/img/external/svg/aws.svg',
      },
      {
        name: 'API',
        src: '../../assets/img/external/svg/api.svg',
      },
      {
        name: 'Node JS',
        src: '../../assets/img/external/svg/nodejs.svg',
      },
      {
        name: 'Express JS',
        src: '../../assets/img/external/svg/express-js.svg',
      },
      {
        name: 'SwiperJs',
        src: '../../assets/img/external/svg/Swiper.svg',
      },
      {
        name: 'Bulma css',
        src: '../../assets/img/external/svg/bulma..svg',
      },
      {
        name: 'Material UI',
        src: '../../assets/img/external/svg/mui..svg',
      },
      {
        name: 'Tailwind CSS',
        src: '../../assets/img/external/svg/tailwind..svg',
      },
      {
        name: 'Photoshop',
        src: '../../assets/img/external/svg/photoshop.svg',
      },
      {
        name: 'Figma',
        src: '../../assets/img/external/svg/figma..svg',
      },
      {
        name: 'Git',
        src: '../../assets/img/external/svg/git..svg',
      },
      {
        name: 'SEO',
        src: '../../assets/img/external/svg/seo.svg',
      },
      {
        name: 'Web Accessibility',
        src: '../../assets/img/external/svg/webAccessibility.svg',
      },
      {
        name: 'Jest',
        src: '../../assets/img/external/svg/jest.svg',
      },
    ],
    programming: [
      {
        name: 'C',
        src: '../../assets/img/external/svg/c.svg',
      },
      {
        name: 'C++',
        src: '../../assets/img/external/svg/c++.svg',
      },
      {
        name: 'Java',
        src: '../../assets/img/external/svg/java.svg',
      },
      {
        name: 'python',
        src: '../../assets/img/external/svg/python.svg',
      },
      {
        name: 'Javascript',
        src: '../../assets/img/external/svg/javascript.svg',
      },
      {
        name: 'Typescript',
        src: '../../assets/img/external/svg/typescript.svg',
      },
    ],
    frontend: [
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
        name: 'Typescript',
        src: '../../assets/img/external/svg/typescript.svg',
      },
      {
        name: 'Bootstrap',
        src: '../../assets/img/external/svg/bootstrap.svg',
      },
      {
        name: 'Angular',
        src: '../../assets/img/external/svg/angular.svg',
      },
      {
        name: 'Material',
        src: '../../assets/img/external/svg/angmat.svg',
      },
      {
        name: 'MUI',
        src: '../../assets/img/external/svg/mui..svg',
      },
      {
        name: 'EJS',
        src: '../../assets/img/external/svg/ejs.svg',
      },
    ],
    backend: [
      {
        name: 'Node JS',
        src: '../../assets/img/external/svg/nodejs.svg',
      },
      {
        name: 'Express JS',
        src: '../../assets/img/external/svg/express-js.svg',
      },
      {
        name: 'Firebase',
        src: '../../assets/img/external/svg/firebase.svg',
      },
      {
        name: 'AWS',
        src: '../../assets/img/external/svg/aws.svg',
      },
      {
        name: 'API',
        src: '../../assets/img/external/svg/api.svg',
      },
    ],
    database: [
      {
        name: 'MongoDB',
        src: '../../assets/img/external/svg/mongodb.svg',
      },
      {
        name: 'SQL',
        src: '../../assets/img/external/svg/sql.svg',
      },
      {
        name: 'Firebase',
        src: '../../assets/img/external/svg/firebase.svg',
      },
      {
        name: 'AWS',
        src: '../../assets/img/external/svg/aws.svg',
      },
    ],
    other: [
      {
        name: 'Photoshop',
        src: '../../assets/img/external/svg/photoshop.svg',
      },
      {
        name: 'Figma',
        src: '../../assets/img/external/svg/figma..svg',
      },
      {
        name: 'Git',
        src: '../../assets/img/external/svg/git..svg',
      },
      {
        name: 'SEO',
        src: '../../assets/img/external/svg/seo.svg',
      },
      {
        name: 'Web Accessibility',
        src: '../../assets/img/external/svg/webAccessibility.svg',
      },
      {
        name: 'Jest',
        src: '../../assets/img/external/svg/jest.svg',
      },
    ],
  };
}
