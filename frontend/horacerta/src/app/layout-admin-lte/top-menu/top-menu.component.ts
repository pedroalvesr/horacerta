import { Component, OnInit } from '@angular/core';

import { ConfiguracaoService } from './../../servicos/configuracao.service';

@Component({
  selector: 'hr-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  pessoa: any;

  constructor(private configuracaoService: ConfiguracaoService) {
    this.configuracaoService.consultarPessoa().subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }

  ngOnInit() { }


}
