import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IData} from './data';

const api_key = {
  headers: new HttpHeaders().set('Authorization',  'c490a49a9275e1ba6bb84d9bb407fa3b493edf68')
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private githubReposUrl: string = 'https://api.github.com/search/repositories?q=';
  limit:string = 'page=1';
	constructor(private http: HttpClient){

	}

	getData(query: string): Observable<IData[]>{
		return this.http.get<IData[]>(`${this.githubReposUrl}${query}&${this.limit}`, api_key).pipe(
			tap(data => console.log(`All: ${JSON.stringify(data)}`)),
			catchError(this.handleError)
		)
	}

	private handleError(err: HttpErrorResponse){
		let errorMessage = '';
		if(err.error instanceof ErrorEvent){
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
		}

		console.error(errorMessage);
		return throwError(errorMessage)
	}
}
