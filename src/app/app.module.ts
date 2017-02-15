import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {GamePage, MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage,StandingsPage,TeamHomePage  } from "../pages/pages";

@NgModule({
  declarations: [
    MyApp,
    TeamDetailPage,  // не забывать закидывать новые страницы в декларации и ентрикомпонентс
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamDetailPage,
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage


  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
