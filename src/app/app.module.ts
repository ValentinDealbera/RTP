import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { DrawerComponent } from './drawer/drawer.component';
import { CardComponent } from './card/card.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { ActiveNowComponent } from './active-now/active-now.component';
import { ActiveNowCardComponent } from './active-now-card/active-now-card.component';
import { FriendsCardComponent } from './friends-card/friends-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BubbleComponent,
    DrawerComponent,
    CardComponent,
    FriendsPageComponent,
    ActiveNowComponent,
    ActiveNowCardComponent,
    FriendsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
