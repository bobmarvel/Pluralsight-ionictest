import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StandingsPage} from "../standings/standings";
import {TeamDetailPage} from "../team-detail/team-detail";
import {MyTeamsPage} from "../my-teams/my-teams.page";  //импортим контроллер и страницу, куда будем редиректится

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  team: any;    //по аналогии с team detail мы задаем team, а далее биндим ее к данным из navparams
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;  // делаем из новых пэйджей табы.
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }
  goHome(){
    /*this.navCtrl.push(MyTeamsPage)*/
    this.navCtrl.popToRoot();  // это дает нам редирект к руту, а не к конкретной странице

  }
}
