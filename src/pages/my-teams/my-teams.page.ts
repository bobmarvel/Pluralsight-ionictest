/**
 * Created by Ivan on 11.02.2017.
 */
import { Component } from '@angular/core';  // сначала импортим компонент (app component)
import {NavController } from 'ionic-angular';
import {TournamentsPage} from "../tournaments/tournaments";


@Component ({     // определяем сам компонент
  templateUrl: 'my-teams.page.html'  // ссылка на шаблон, по которому пилится все
})
export class MyTeamsPage {   // запиливаем свой класс для экспорта (доступность страницы)
  constructor(private nav: NavController) {

  }
  goToTournaments(){
    this.nav.push(TournamentsPage);
    }
}
