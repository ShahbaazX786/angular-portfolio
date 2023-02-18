import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ExpData = [
    {
      name:'Accenture',
      fullname:'Accenture Solutions Pvt. Ltd.',
      type:'Software Developer 1',
      logo:'../../assets/V2/Experience/Accenture.svg',
      startDate:'Oct 2021',
      completeDate:'Present',
      designation:'Application Development Associate (SDE1)',
      intro:'Joined Accenture in 2021 and got trained in Angular.',
      responsibilities:[
        'Developed Frontend UI in Angular',
        'Implemented api(s) and business logic in spring boot',
        'Implemented Unit Tests to improve code coverage for an app from 5% to 90% for a software release',
        'Fixed bugs to improve the reliability score for release.',
        'Mentored and guided fellow freshers to the team.',
      ]
    },
    {
      name:'GPCET',
      fullname:'G.Pullaiah College Of Engineering And Technology',
      type:'Graduation',
      logo:'../../assets/V2/Experience/gpcet.png',
      startDate:'June 2017',
      completeDate:'May 2021',
      designation:'Graduate Student',
      intro:'I studied Computer Science & Engineering (CSE) during my 4 years of bachelor studies, Though I was not that interested in workshops but I participated in many Hackacthons, Coding Contests, Mini-Projects and also some field work as well.',
      responsibilities:[
        'Academia',
        'Taking part in hackathons',
        'Taking part in coding contests',
        'Making projects whenever I get time',
        'Involving in EC activities and fun interactions with fellow freshers',
      ]
    }
  ]
}
