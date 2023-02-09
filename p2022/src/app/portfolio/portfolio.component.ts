import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

  myScriptElement: HTMLScriptElement;

  constructor() {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = '../../assets/files/swiper.js';
    document.body.appendChild(this.myScriptElement);
  }


  ngOnInit(): void {}

  portfolio_array = [
    {
      name: 'Tindoggo',
      img: '../../assets/img/external/Project-screenshots/Tindoggo.png',
      desc: 'This is a description',
    },
    {
      name: 'She-Hulk',
      img: '../../assets/img/external/Project-screenshots/construction.png',
      desc: 'This is a description',
    },
    {
      name: 'Blog-EJS',
      img: '../../assets/img/external/Project-screenshots/Blog.png',
      desc: 'This is a description',
    },
    {
      name: 'Todolist-EJS',
      img: '../../assets/img/external/Project-screenshots/TodoList.png',
      desc: 'This is a description',
    },
    {
      name: 'Newsletter-API',
      img: '../../assets/img/external/Project-screenshots/Newsletter.png',
      desc: 'This is a description',
    },
    {
      name: 'Drumkit',
      img: '../../assets/img/external/Project-screenshots/drumkit.png',
      desc: 'This is a description',
    },
    {
      name: 'Simons-game',
      img: '../../assets/img/external/Project-screenshots/simongame.png',
      desc: 'This is a description',
    },
    {
      name: 'slide-animation',
      img: '../../assets/img/external/Project-screenshots/slideanimation.png',
      desc: 'This is a description',
    },
  ];
}
