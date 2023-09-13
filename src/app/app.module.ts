import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollHeaderComponent } from './scroll-header/scroll-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { TypingHeaderComponent } from './typing-header/typing-header.component';
import { SnowOverlayComponent } from './snow-overlay/snow-overlay.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ScrollHeaderComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    TypingHeaderComponent,
    SnowOverlayComponent,
    SideNavComponent,
    ExperienceComponent
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
