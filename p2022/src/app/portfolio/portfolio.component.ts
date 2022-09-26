import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  portfolio_array = [
    {
      name:'Tindoggo',
      img:'../../assets/img/external/Project-screenshots/Tindoggo.png'
    },
    {
      name:'She-Hulk',
      img:'../../assets/img/external/Project-screenshots/construction.png'
    },
    {
      name:'Blog-EJS',
      img:'../../assets/img/external/Project-screenshots/Blog.png'
    },
    {
      name:'Todolist-EJS',
      img:'../../assets/img/external/Project-screenshots/TodoList.png'
    },
    {
      name:'Newsletter-API',
      img:'../../assets/img/external/Project-screenshots/Newsletter.png'
    },
    {
      name:'Drumkit',
      img:'../../assets/img/external/Project-screenshots/drumkit.png'
    },
    {
      name:'Simons-game',
      img:'../../assets/img/external/Project-screenshots/simongame.png'
    },
    {
      name:'slide-animation',
      img:'../../assets/img/external/Project-screenshots/slideanimation.png'
    },
  ]

}
