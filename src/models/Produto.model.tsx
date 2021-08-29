export class Produto {
  NomeProduct: string;
  Quantidade: Number;
  Unidade: string;
  
  constructor(
    NomeProduct: string,
    Quantidade: Number,
    Unidade: string
  ) {
    this.NomeProduct = NomeProduct;
    this.Quantidade = Quantidade;
    this.Unidade = Unidade;
  }
}