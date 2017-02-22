import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import {EliteApi} from "../../shared/elite-api.service";
import { GamePage } from '../game/game';
/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  games: any[];
  private tourneyData;
team: any;  // задаем переменную teams, использованную в teams.ts для редиректа сюда

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
    /*console.log('**nav params: ', this.navParams);  // чекеp*/
  }
  ionViewDidLoad(){
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();

    this.games = _.chain(this.tourneyData.games)
      .filter(games => games.team1Id === this.team.id || games.team2Id === this.team.id)
      .map(games => {
        let isTeam1 = (games.team1Id === this.team.id);
        let opponentName = isTeam1 ? games.team2 : games.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, games.team1Score, games.team2Score);
        return {
          gameId: games.id,
          opponent: opponentName,
          time: Date.parse(games.time),
          location: games.location,
          locationUrl: games.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at") // if its isTeam1 use "vs" otherwise use "at"
        };
      })
      .value();



  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score); //if its team1 use team1score otherwise use teams 2
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    }
    else {
      return "";
    }
  }
  /*goHome() {
    this.navCtrl.parent.parent.popToRoot(); // юзаем два пэрента, потому что в 1-м родителе
    //  у нас Tabs, следовательно, нам нужен пэрент табсов, а там уже редирект на рут
    // this.nav.push(MyTeamsPage) - неподходит, потому что будет стрелка назад
    // this.nav.popToRoot() - неподходит, потому что у Sub-табсов пэрентом является Tabs,
    // следователно, редирект будет относительно пэрента, т.е никуда (в табс).
  }  НЕ ЮЗАЕМ ЭТО, ПОТОМУ ЧТО У НАС УЖЕ ЕСТЬ ИКОНКА HOME, ЭТО БЫЛО ДЛЯ ПРИМЕРА
*/
 gameClicked($event, game) {
 let SourceGame = this.tourneyData.games.find(games => games.id === game.gameId);
 this.navCtrl.parent.parent.push(GamePage, SourceGame);

 }

}


//ionic generate page TeamDetail
