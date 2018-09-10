import { Component, OnInit } from '@angular/core';

import { PontoService } from '../../servicos/ponto.service';


@Component({
  selector: 'hr-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  registros: any = []
  totalRegistro = 0

  constructor(private pontoService: PontoService) { }

  ngOnInit() {
    this.listar({ dataInicial: "2018-09-01", dataFinal: "2018-09-30" })
  }

  listar(parametros) {
    this.pontoService.listar(parametros).subscribe(dados => {
      this.registros = dados;
    });


  }


}