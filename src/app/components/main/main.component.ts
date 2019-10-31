import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Moedas } from 'src/app/interfaces/moedas';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  moedas: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMoedas();
    console.log('LISTAGEM DE MOEDAS', this.moedas);
  }

  getMoedas() {
    this.mainService.getListaMoedas()
      .subscribe(
        (moedas: Moedas[]) => {
        this.moedas = moedas;
        console.log('Os dados foram capturados com sucesso', this.moedas);
      }, () => {console.log('Erro ao carregar dados da API Moedas');
    });
  }

  // getMoedas(): void {
  //   this.mainService.getListaMoedas()
  //     .subscribe(
  //       (moedas: any) => {
  //       this.moedas = moedas.USD;
  //       console.log('Os dados foram capturados com sucesso', this.moedas.USD);
  //     }, () => {console.log('Erro ao carregar dados da API Moedas');
  //   });
  // }

  // calculoUsd() {
  //   this.resultDollar = this.valorDigitado * this.moedas.USD.high;
  // }
}
