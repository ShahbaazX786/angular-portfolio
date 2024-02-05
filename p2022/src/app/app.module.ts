import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my pages
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PnfComponent } from './pnf/pnf.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { HobbyComponent } from './hobby/hobby.component';
import { LanguageSelectorDialogComponent } from './language-selector-dialog/language-selector-dialog.component';
import { WavesComponent } from './shared/waves/waves.component';

// module imports
import { MaterialsModule } from './shared/materials.module';
import { IntegrationModule } from './integrations/integration.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PnfComponent,
    AboutComponent,
    ServicesComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,
    LanguageSelectorDialogComponent,
    HobbyComponent,
    WavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    IntegrationModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'en'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
