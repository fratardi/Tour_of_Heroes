import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })


export class HeroService {


  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




    getHeroes():  Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  

  updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
  }



  constructor
  (
    private http: HttpClient,
    private messageService: MessageService,
  )
  {} //empty scope

  getHero(id: number): Observable<Hero> 
  {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
  }





private heroesUrl = 'api/heroes';  // URL to web api

/** Log a HeroService message with the MessageService */

  private log(message: string)
  {
   this.messageService.add(`HeroService: ${message}`);
  }

}
