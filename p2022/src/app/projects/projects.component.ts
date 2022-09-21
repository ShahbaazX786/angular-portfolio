import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      Name: 'SHE HULK by Titannia',
      Link: 'https://github.com/ShahbaazX786/SHE-HULK-by-Titannia',
      screenshot:
        '../../assets/img/external/Project-screenshots/construction.png',
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
      Name: 'Pizzeria',
      Link: 'https://github.com/ShahbaazX786/Pizzeria',
      screenshot:
        '../../assets/img/external/Project-screenshots/construction.png',
      Desc: 'Order your pizza with customizations and get it delivered at your door',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/nodejs.svg',
        },
        {
          img: '../../assets/img/external/svg/mongodb.svg',
        },
        {
          img: '../../assets/img/external/svg/express-js.svg',
        },
      ],
    },
    {
      Name: 'Weather Forecast Webapp',
      Link: 'https://github.com/ShahbaazX786/weather-angular',
      screenshot:
        '../../assets/img/external/Project-screenshots/construction.png',
      Desc: 'Find out the weather forecast across the world using this webapp',
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
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/api.svg',
        },
      ],
    },
    {
      Name: 'TinDoggo - Tinder clone for Dogs',
      Link: 'https://shahbaazx786.github.io/TinDoggo/',
      screenshot: '../../assets/img/external/Project-screenshots/Tindoggo.png',
      Desc: 'Give your Dogs love life head-start with TinDoggo',
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
      Name: 'Roll the Dice',
      Link: 'https://shahbaazx786.github.io/Roll-the-dice/',
      screenshot:
        '../../assets/img/external/Project-screenshots/rollthedice.png',
      Desc: 'The classic roll the dice website.',
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
      Name: 'Expanding Cards Animation',
      Link: 'https://shahbaazx786.github.io/Expanding-Cards/',
      Desc: 'This is an animated slideshow to view pictures in the website',
      screenshot: '../../assets/img/external/Project-screenshots/slideanimation.png',
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
      Name: 'Drummer X Drummer',
      Link: 'https://shahbaazx786.github.io/DrummerXDrummer/',
      screenshot: '../../assets/img/external/Project-screenshots/drumkit.png',
      Desc: 'Check your Drum Kit potential by using this website',
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
      Name: 'Simons Game',
      Link: 'https://shahbaazx786.github.io/JQuery-Memory-Game/',
      screenshot:
        '../../assets/img/external/Project-screenshots/simongame.png',
      Desc: 'The all time favorite challenging retro game called as simon memory game',
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
        {
          img: '../../assets/img/external/svg/jquery.svg',
        },
      ],
    },
  ];
}
