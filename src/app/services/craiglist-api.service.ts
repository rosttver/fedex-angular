import { Observable } from 'rxjs';
import { SearchItem } from './../interfaces/SearchItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CraigslistApiService {
  queryResponse$: Observable<SearchItem[]>
  constructor(private http: HttpClient) { }

  processInput(input: string) {
    const query = `http://localhost:3000/api/search/${input}`
    this.queryResponse$ = this.http.get<SearchItem[]>(query);
  }
  getResults() {
    return this.queryResponse$;
  }
}
