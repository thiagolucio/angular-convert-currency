import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Moedas } from 'src/app/interfaces/moedas';

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
    this.getMoedasUm();
    console.log('LISTAGEM DE MOEDAS', this.moedas);
  }
    // Quando eu habilito este aqui ele informa (no html) que USD, EUR e BTC são undefined ou não existe no Moedas[]
    getMoedas() {
      this.mainService.getListaMoedas()
        .subscribe(
          (moedas: Moedas[]) => {
          this.moedas = moedas;
          console.log('Os dados foram capturados com sucesso', this.moedas);
        }, () => {console.log('Erro ao carregar dados da API Moedas');
      });
    }

  // Quando eu habilito este abaixo a propriedade name, high, etc. Ficam acusando serem undefined
  getMoedasUm(): void {
    this.mainService.getListaMoedas()
      .subscribe(
        (moedas: any) => {
        this.moedas = moedas.USD;
        console.log('Os dados foram capturados com sucesso', this.moedas.USD);
      }, () => {console.log('Erro ao carregar dados da API Moedas');
    });
  }



  // calculoUsd() {
  //   this.resultDollar = this.valorDigitado * this.moedas.USD.high;
  // }
}
