import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs';  // заливаем library rxjs
import { Observable } from 'rxjs';

@Injectable()
export class EliteApi{
  private baseUrl = 'https://ionic-test-pluralsight-app.firebaseio.com';  // биндим основную ссылку на базу данных в json'е

  currentTourney:any = {};    // создаем переменную текущего турнира
  constructor(private http: Http) {       // в констрактор закидывем http, который взяли из импорта

  }
  getTournaments() {                //создаем метод, который возвращает турниры
    return new Promise(resolve =>{        // ретерним промис, при обработке делаем следующее
    this.http.get(`${this.baseUrl}/tournaments.json`)  // применяем метод http.get с переменной урлой/страница.json
      .subscribe(res => resolve(res.json()));   // сабскрайбимся на этот метод, чтобы загружать данные, если они добавятся
    });
  }
  getTournamentData(tourneyId): Observable<any> {   // метод, который возвращает всю информацию об конкретном турнире
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`) // так же строчка, но + добавляется variable tourneyID
      .map(  /*Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива*/
        // чтобы map работал, надо заимпортить Observable
        (response: Response) => {  // при получении ответа выполняем следующий код
          this.currentTourney = response.json(); // присваеваем значение ответа к текущему турниру
          return this.currentTourney;
        });
  }
  getCurrentTourney() {
    return this.currentTourney;
  }
}
