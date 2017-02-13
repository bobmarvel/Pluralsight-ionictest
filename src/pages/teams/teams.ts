import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TeamDetailPage} from "../team-detail/team-detail";
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [       // создаем массив объектов, где объект - team
    {id:1, name: 'Team1'},
    {id:2, name: 'EleGiggle'},
    {id:3, name: 'JJ Ockocha'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

itemTapped($event, team) {      // передаем параметры эвент и команда, эвент - куда редиректим, team - какая конкретно команда
    this.navCtrl.push(TeamDetailPage, team);
}

}
