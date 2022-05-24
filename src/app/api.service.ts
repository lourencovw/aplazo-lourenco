import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IListResult {
  results: IResult[];
}

interface IResult {
  name: string;
  gender: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://rickandmortyapi.com/api/'
  constructor(private http: HttpClient) { }

  list(url: string) {
    return this.http.get<IListResult>(this.BASE_URL + url)
  }

  show(url: string, id: string) {
    return this.http.get(this.BASE_URL + url)
  }
}
