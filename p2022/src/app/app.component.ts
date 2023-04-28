import { HelperService } from 'src/app/helper.service';
import { Component, ViewChild } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PnfComponent } from './pnf/pnf.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'p2022';

  @ViewChild(HeroComponent, { static: false })
  HeroComponent!: HeroComponent;
  @ViewChild(AboutComponent, { static: false })
  AboutComponent!: AboutComponent;
  @ViewChild(ServicesComponent, { static: false })
  ServicesComponent!: ServicesComponent;
  @ViewChild(SkillsComponent, { static: false })
  SkillsComponent!: SkillsComponent;
  @ViewChild(ExperienceComponent, { static: false })
  ExperienceComponent!: ExperienceComponent;
  @ViewChild(ProjectsComponent, { static: false })
  ProjectsComponent!: ProjectsComponent;
  @ViewChild(PortfolioComponent, { static: false })
  PortfolioComponent!: PortfolioComponent;
  @ViewChild(ContactComponent, { static: false })
  ContactComponent!: ContactComponent;
  @ViewChild(PnfComponent, { static: false })
  PnfComponent!: PnfComponent;


  constructor(private _helper: HelperService) {
    this._helper.navigate.subscribe((status: string) => {
      this[status].nativeElement.scrollIntoView({
        behaviour: 'auto',
        block: 'center',
        inline: 'center',
      });
    });
  }
}
