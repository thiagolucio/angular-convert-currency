import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Moedas } from 'src/app/interfaces/moedas';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  valor1: 234;
  valor2: 444;

  moedas: any;
  valorDigitado: any;
  moedaSelecionada = {
    moedaUm: 'USD',
    moedaDois: 'EUR',
    moedaTres: 'BTC'
  };
  resultDollar: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMoedasUsd();
    this.getValorConvertUsd();
  }
    // Quando eu habilito este aqui ele informa (no html) que USD, EUR e BTC são undefined ou não existe no Moedas[]
    getMoedasUsd() {
      this.mainService.getListaMoedasUSD()
        .subscribe(
          (moedas: Moedas[]) => {
          this.moedas = moedas;
          this.valorDigitado = this.valorDigitado * this.moedas.bid;
          console.log('Os dados foram capturados com sucesso', this.moedas);
        }, () => {console.log('Erro ao carregar dados da API Moedas');
      });
    }

    getValorConvertUsd() {
      this.getMoedasUsd();
      console.log('RESULATDO', this.moedas);
    }
}
