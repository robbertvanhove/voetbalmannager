import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBootstrapModule } from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { InfoModule } from './info/info.module';
import { LoginModule } from './login/login.module';
import { MatchBeheerModule } from './match-beheer/match-beheer.module';
import { SpelerBeheerModule } from './speler-beheer/speler-beheer.module';
import { StatsModule } from './stats/stats.module';
import { Error404Module } from './error404/error404.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatchitemModule } from './match-beheer/matchitem/matchitem.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { from } from 'rxjs';
import { LivematchModule } from './livematch/livematch.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    HomeModule,
    InfoModule,
    LoginModule,
    MatchBeheerModule,
    SpelerBeheerModule,
    StatsModule,
    Error404Module,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFirestoreModule.enablePersistence(),             
    AngularFireAuthModule, MatchitemModule,   
    NgxSpinnerModule, LivematchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
