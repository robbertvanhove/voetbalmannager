import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';      // (1)
import { EMPTY, Observable } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FootnewsService {

  readonly ROOT_URL = 'https://newsapi.org/v2/everything';
  readonly API_KEY = '61bccd3117824ad3853fd0bd29eaeefe';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    const params = new HttpParams().
      set('q', 'premier%league')
      .set('apiKey', this.API_KEY);

    return this.http.get(this.ROOT_URL, { params })
      .pipe(
        tap(req => console.log('get-request', req)),
        catchError(
          err => {
            console.log(err);
            return EMPTY
          }),
        share()
      );

  }
}
