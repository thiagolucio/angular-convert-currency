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

  getListaMoedasUSD(): Observable<Moedas[]> {
    const URLAPIMOEDASUSD = `${environment.apiMoedas}/all/USD-BRL`;
    return this.http.get<Moedas[]>(URLAPIMOEDASUSD);
  }
  getListaMoedasEUR(): Observable<Moedas[]> {
    const URLAPIMOEDASEUR = `${environment.apiMoedas}/all/EUR-BRL`;
    return this.http.get<Moedas[]>(URLAPIMOEDASEUR);
  }
  getListaMoedasBTC(): Observable<Moedas[]> {
    const URLAPIMOEDASBTC = `${environment.apiMoedas}/all/BTC-BRL`;
    return this.http.get<Moedas[]>(URLAPIMOEDASBTC);
  }



}
