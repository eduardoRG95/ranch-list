import { Produto } from "./Produto.model";

export class Type {
  id: Number;
  periodicity: string;
  title: string;
  products: Produto[];

  constructor(
    id: Number,
    periodicity: string,
    title: string,
    products: Produto[]
  ) {
    this.id = id;
    this.periodicity = periodicity;
    this.title = title;
    this.products = products;
  }
}