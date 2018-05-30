import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: Http) { }

  getCategorieServices() {
    const url = 'https://api.myglamapp.pl/api/categories?language=EN';
    return this.http.get(url);
  }
}
