import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './views/compontents/competition/competition.component';
import { LeaderboardComponent } from './views/compontents/leaderboard/leaderboard.component';
import { MainMenuComponent } from './views/compontents/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
