import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EliteApi} from "../../shared/elite-api.service";
import {TeamHomePage} from "../team-home/team-home";

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    this.game = this.navParams.data;    // assign game to the data coming from navParams
  }
  teamTapped(teamId) {    // передаем  teamId  как параметр
    let tourneyData = this.eliteApi.getCurrentTourney(); // выполняем функцию getcurrenttourney, описанную в eliteapi
    let team = tourneyData.teams    //  выполняем поиск по командам в текущем турнире, при нахождении teams биндим t.id к teamId и это присваеваем team
      .find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage,team); // который будет передаваться как навпараметр. т.е передаем команду к качестве параметра
  }

}
