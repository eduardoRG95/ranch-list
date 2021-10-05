import { Produto } from "./Produto.model";

export interface Type {
  id: Number;
  periodicity: string;
  title: string;
  products: Produto[];
}