/**
 * Created by Ivan on 11.02.2017.
 */
import { Component } from '@angular/core';  // сначала импортим компонент (app component)
import {NavController, LoadingController } from 'ionic-angular';
import {TournamentsPage} from "../tournaments/tournaments";
import {TeamHomePage} from "../team-home/team-home";
import {EliteApi} from "../../shared/elite-api.service";

@Component ({     // определяем сам компонент
  templateUrl: 'my-teams.page.html'  // ссылка на шаблон, по которому пилится все
})
export class MyTeamsPage {   // запиливаем свой класс для экспорта (доступность страницы)
  favorites = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Challenge'
    }
  ];

  constructor(private nav: NavController, private eliteApi: EliteApi,
              private loadingController: LoadingController ) {  // задаем параметр navcontroller, чтобы получить доступ к контроллеру

  }
  goToTournaments(){
    this.nav.push(TournamentsPage);  // редирект навигатором в tournamentspage
    }
  favoriteTapped($event, fav) {
    let loader = this.loadingController.create({
      content: 'LUL',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(fav.tournamentId)
      .subscribe(t => this.nav.push(TeamHomePage, fav.team));
  }

}
