import { Connector } from "./../enums/Connector";
import { Adress } from "./Address";
import { Name } from "./Name";

type PersonEqual = { isEqual: boolean; connector: Connector };

export class Person {
  constructor(public fullName: Name, public adress: Adress) {}

  // maybe get all property to compare and change function name
  static compareNameOrCityEqual(
    personOne: Person,
    presonTwo: Person
  ): PersonEqual {
    let defaultValue = { isEqual: false, connector: null };
    if (!personOne || !presonTwo) {
      return defaultValue;
    }
    if (personOne.fullName.fullName === presonTwo.fullName.fullName) {
      return { isEqual: true, connector: Connector.Name };
    }
    if (personOne.adress.fullAdress === presonTwo.adress.fullAdress) {
      return { isEqual: true, connector: Connector.Adress };
    }
    return defaultValue;
  }
}
