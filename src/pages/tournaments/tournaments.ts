import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {MyTeamsPage, TeamsPage } from '../pages';
import {EliteApi} from "../../shared/elite-api.service";

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;  // variable tournament, куда будут заливаться турниры

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi,
  private loadingCtrl: LoadingController) {

  }

  itemTapped($event, item) {
    this.navCtrl.push(TeamsPage, item); // далее редиректим на TeamsPage, но при этом нам надо знать, на какой именно item мы кликнули, поэтому передаем item в параметрах
  }

  ionViewDidLoad(){       //при загрузке страницы выполняем следующее
    let loader = this.loadingCtrl.create({   //создаем лоадинг контроллер, который будет показывать, что данные грузятся
      content: 'Загружаю турниры...'
      //spinner: 'dots'
    });
    loader.present().then(    //когда лоадер загрузился, выполнеяем следующее
      () => {       // когда все нормально (нет параметров), выполняем
        this.eliteApi.getTournaments().then(data => // в элит апи берем метод getTournaments, по его выполнении биндим дату к
          this.tournaments = data);  // переменной tournaments
        loader.dismiss(); // и потом убираем лоадер
      }
    )

  }
  /*
  https://ionicframework.com/docs/v2/api/navigation/NavController/#lifecycle-events
  */

}
