import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Featured = [
    {
      Name: 'Portfolio V1',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/PortfolioV1.png',
      Desc: 'This is my first version of personal portfolio',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
        {
          name: 'Angular',
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          name: 'Bootstrap',
          img: '../../assets/img/external/svg/bootstrap.svg',
        },
      ],
    },
    {
      Name: 'Daily Planet',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/DailyPlanet.png',
      Desc: 'In this project I Used Open Weather API to combine with Angular UI to make a news Website',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Typescript',
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          name: 'Angular',
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          name: 'Angular Material',
          img: '../../assets/img/external/svg/angmat.svg',
        },
      ],
    },
    {
      Name: 'Portfolio V2',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/PortfolioV2.png',
      Desc: 'This is the second version of my personal portfolio Stuffed with features',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Typescript',
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          name: 'Angular 14',
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          name: 'Angulat Material',
          img: '../../assets/img/external/svg/angmat.svg',
        },
        {
          name: 'SwiperJS',
          img: '../../assets/img/external/svg/Swiper.svg',
        },
        {
          name: 'Firebase',
          img: '../../assets/img/external/svg/firebase.svg',
        },
      ],
    },
    {
      Name: 'Drummer X Drummer',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/DrummerXDrummer.png',
      Desc: 'A fun project to play drum set using middle row keys of your keyboard, play it to believe it.',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
    {
      Name: 'Roll The Dice!',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/Dice-Tossing-Game.png',
      Desc: 'The classic Roll the Dice JS Project!',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
    {
      Name: 'Daily Journal',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/Daily-Journal.png',
      Desc: 'This is a Dairy/Blog type project which is made using EJS(Embedded Javascript) and Other tech.',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'EJS',
          img: '../../assets/img/external/svg/ejs.svg',
        },
        {
          name: 'NodeJS',
          img: '../../assets/img/external/svg/nodejs.svg',
        },
        {
          name: 'Express',
          img: '../../assets/img/external/svg/express-js.svg',
        },
        {
          name: 'MongoDB',
          img: '../../assets/img/external/svg/mongodb.svg',
        },
      ],
    },
    {
      Name: 'Meme Board',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/MemeBoard.png',
      Desc: 'Another fun project which I made in college when I used to look at memes a lot!',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
    {
      Name: 'Simon\'s Game',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/Featured/SimonGame.png',
      Desc: 'Simon\'s Game, A Game made using JQuery',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
        {
          name: 'JQuery',
          img: '../../assets/img/external/svg/jquery.svg',
        },
      ],
    },
  ];

  UI = [
    {
      Name: 'TinDoggo',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/TinDoggo.png',
      Desc: 'TinDoggo - Tinder for Dogs Concept UI',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
      ],
    },
    {
      Name: 'Rick And Morty Sees You!',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/RickNMorty-JS.png',
      Desc: 'Yet Another fun project which I made based on fireship',
      stack: [
        {
          name: 'HTML',
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          name: 'CSS',
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          name: 'Javascript',
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
    {
      Name: 'Newsletter Subscription Page',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/NewsLetterForm.png',
      Desc: 'A Basic yet Good looking Newsletter subscription page',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/bootstrap.svg',
        },
      ],
    },

    {
      Name: 'E-Commerce Product Card',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/Shopping-Card.png',
      Desc: 'Yet another Frontend Mentor Challenge',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
      ],
    },
    {
      Name: 'Flexbox Card Design',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/CardDesign1.png',
      Desc: 'This page is a personal UI Exercise to learn Flexbox.',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
      ],
    },
    {
      Name: 'NFT Card Design',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/NFT-card.png',
      Desc: 'NFT Card Design to learn some advanced css',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
      ],
    },
    {
      Name: 'QR Code Card',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/UI/QRcode-Card.png',
      Desc: 'QR Code Card UI design from Frontend Mentor',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
      ],
    },
  ];

  WIP = [
    {
      Name: 'SHE HULK by Titannia',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/WIP/SheHulk.png',
      Desc: 'This website is a personal project made on the little glimpse i got in the Marvels SHE HULK Episode 5',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
    {
      Name: 'MangaBoii',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot: '../../assets/V2/Projects/WIP/MangaBoii.png',
      Desc: 'This website is a personal project made on the little glimpse i got in the Marvels SHE HULK Episode 5',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/javascript.svg',
        },
      ],
    },
  ];
}
