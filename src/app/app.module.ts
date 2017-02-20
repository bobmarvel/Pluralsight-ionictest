import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {GamePage, MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage,StandingsPage,TeamHomePage  } from "../pages/pages";
import {HttpModule, Http  } from '@angular/http';
import {EliteApi} from "../shared/elite-api.service";

@NgModule({
  declarations: [
    MyApp,
    TeamDetailPage,  // не забывать закидывать новые страницы в декларации и ентрикомпонентс
    MyTeamsPage,
    GamePage,
    TournamentsPage,
    TeamsPage,
    StandingsPage,
    TeamHomePage,


  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule

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
    TeamHomePage,



  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler,}, EliteApi]
})
export class AppModule {}
