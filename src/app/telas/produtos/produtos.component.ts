import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meuTitulo = "Novo Titulo - Produtos";
  nomeProduto = "Produtos";
  produtos = [
    { id: 1, descricao: "Monitor", grupo: 'eletronicos' },
    { id: 2, descricao: "Fone", grupo: 'eletronicos' },
    { id: 3, descricao: "Notebook", grupo: 'eletronicos' },
    { id: 4, descricao: "Geladeira", grupo: 'eletrodomesticos' },
  ];

  acaoBotao = (usuario: string) => {
    //const novoNome = this.nomeCompleto(usuario);
    //this.meuTitulo = novoNome;
    const indexFone = this.produtos.findIndex(p => p.grupo == 'eletronicos');
    if (indexFone >= 0) {
      const novaLista = this.produtos.splice(indexFone, 1);
    }
  }

  nomeCompleto = (usuario: string) => {
    const nomeComp = usuario + " Gama";
    return nomeComp;
  }

  acaoMenuClicado = (valor: string) => {
    this.nomeProduto = valor;



  }
}
