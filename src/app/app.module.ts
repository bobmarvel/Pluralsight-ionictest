import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {GamePage, MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage  } from "../pages/pages";

@NgModule({
  declarations: [
    MyApp,
    TeamDetailPage,
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamsPage

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
    TeamsPage


  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
