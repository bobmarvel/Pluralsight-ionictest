import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {TeamHomePage} from "../team-home/team-home";
import { EliteApi } from '../../shared/elite-api.service';
import * as _ from 'lodash';

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
  private allTeams: any;
  private  allTeamsDivisions: any;
  teams = [];

  /*teams = [       // создаем массив объектов, где объект - team
    {id:1, name: 'Team1'},
    {id:2, name: 'EleGiggle'},
    {id:4, name: 'Lulmao'},
    {id:5, name: 'JJ Ockocha'},
    {id:6, name: 'ApeNation'},
    {id:7, name: 'DJ'},
    {id:8, name: 'Jerax'},
    {id:9, name: 'kochera'},
    {id:10, name: 'eheheheheh'},
    {id:11, name: 'sup dude'},
    {id:12, name: 'Jokes'},
    {id:13, name: 'Memes'},
    {id:14, name: 'JJ Ockocha[2]'},

  ];*/

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eliteApi: EliteApi, private loadingController: LoadingController) {}

itemTapped($event, team) {      // передаем параметры эвент и команда, эвент - куда редиректим, team - какая конкретно команда
    this.navCtrl.push(TeamHomePage, team);

}
  ionViewDidLoad() {
      let selectedTourney = this.navParams.data;  // присваеваем значение выбранного параметра с помощью навпарамса

    let loader = this.loadingController.create({
      content: 'sususususus'
    });
      loader.present().then(
        () => {
        this.eliteApi.getTournamentData(selectedTourney.id)  // юзаем апи для получения данных
          .subscribe(data=> { // сабскайбися, при получении данных
            this.allTeams = data.teams;
            this.allTeamsDivisions = _.chain(data.teams)
              .groupBy('division').toPairs().map(item => _.zipObject(['divisionName', 'divisionTeams'], item)).value();
            this.teams = this.allTeamsDivisions;  // присваеваем к teams значения данных

            console.log('the division teams are: ',  this.teams);
            loader.dismiss();
          });
      });

    }

}
