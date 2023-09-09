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

@NgModule({
  declarations: [
    AppComponent,
    ScrollHeaderComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    TypingHeaderComponent,
    SnowOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
