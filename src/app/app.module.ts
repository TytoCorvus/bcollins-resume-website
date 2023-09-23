import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { SnowOverlayComponent } from './snow-overlay/snow-overlay.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { TextCycleComponent } from './common/text-cycle/text-cycle.component';
import { TechDetailComponent } from './common/tech-detail/tech-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    SnowOverlayComponent,
    SideNavComponent,
    ExperienceComponent,
    HeaderNavComponent,
    HomeComponent,
    TextCycleComponent,
    TechDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
