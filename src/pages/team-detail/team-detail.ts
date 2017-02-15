import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
team: any;  // задаем переменную teams, использованную в teams.ts для редиректа сюда

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.team = this.navParams.data;   // к конкретной команде присваеваем данные из navparams
    console.log('**nav params: ', this.navParams);  // чекеp
  }
  goHome() {
    this.navCtrl.parent.parent.popToRoot(); // юзаем два пэрента, потому что в 1-м родителе
    //  у нас Tabs, следовательно, нам нужен пэрент табсов, а там уже редирект на рут
    // this.nav.push(MyTeamsPage) - неподходит, потому что будет стрелка назад
    // this.nav.popToRoot() - неподходит, потому что у Sub-табсов пэрентом является Tabs,
    // следователно, редирект будет относительно пэрента, т.е никуда (в табс).
  }



}


//ionic generate page TeamDetail
