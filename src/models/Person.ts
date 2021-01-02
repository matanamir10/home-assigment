import { Adress } from "./Address";
import { Name } from "./Name";

export class Person {
  constructor(public fullName: Name, public adress: Adress) {}
}
