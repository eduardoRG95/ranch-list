import { Produto } from "./Produto.model";

export class Type {
  id: Number;
  title: string;
  products: Produto[];

  constructor(
    id: Number,
    title: string,
    products: Produto[]
  ) {
    this.id = id;
    this.title = title;
    this.products = products;
  }
}