import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { StatsComponent } from './stats/stats.component';
import { SpelerBeheerComponent } from './speler-beheer/speler-beheer.component';
import { MatchBeheerComponent } from './match-beheer/match-beheer.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivematchComponent } from './livematch/livematch.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'info', component: InfoComponent },
  { path: 'matchbeheer', component: MatchBeheerComponent, canActivate: [AuthGuard] },
  { path: 'spelersbeheer', component: SpelerBeheerComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'livematch', component: LivematchComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
