export class Produto {
  name: string;
  Quantidade: Number;
  Unidade: string;
  
  constructor(
    name: string,
    Quantidade: Number,
    Unidade: string
  ) {
    this.name = name;
    this.Quantidade = Quantidade;
    this.Unidade = Unidade;
  }
}