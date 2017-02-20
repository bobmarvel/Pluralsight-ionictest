import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule, Http } from '@angular/http';
import {GamePage, MyTeamsPage, TournamentsPage, TeamsPage  } from "../pages/pages";  // два разных способа импорта, тут все из файла
import {TeamDetailPage} from "../pages/team-detail/team-detail";
import {EliteApi} from "../shared/elite-api.service";  // тут по отдельности из каждого, проще, но грязнее


@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi,
    HttpModule,

  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;


  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];
*/
  }

  initializeApp() {
    this.platform.ready().then(
      () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goHome() {
    this.nav.push(MyTeamsPage);
  }
  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
}
