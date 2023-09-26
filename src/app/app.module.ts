import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { SnowOverlayComponent } from './snow-overlay/snow-overlay.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { TextCycleComponent } from './common/text-cycle/text-cycle.component';
import { TechDetailComponent } from './common/tech-detail/tech-detail.component';
import { ContactLinksComponent } from './common/contact-links/contact-links.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    SnowOverlayComponent,
    ExperienceComponent,
    HeaderNavComponent,
    HomeComponent,
    TextCycleComponent,
    TechDetailComponent,
    ContactLinksComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
