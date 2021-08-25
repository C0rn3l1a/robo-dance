import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './views/compontents/main-menu/main-menu.component';
import { CompetitionComponent } from './views/compontents/competition/competition.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './views/compontents/leaderboard/leaderboard.component';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CompetitionComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
