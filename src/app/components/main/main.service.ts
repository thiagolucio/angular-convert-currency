import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Moedas } from 'src/app/interfaces/moedas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getListaMoedas(): Observable<Moedas[]> {
    const URLAPIMOEDAS = `${environment.apiMoedas}/all/USD-BRL,EUR-BRL,BTC-BRL`;
    return this.http.get<Moedas[]>(URLAPIMOEDAS);
  }



}
