import { Adress } from "./models/Address";
import { Name } from "./models/Name";
import { Person } from "./models/Person";
import { Relation } from "./utils/Relation";

const relation = new Relation();

const persons: Person[] = [
  new Person(new Name("Gracer", "Hopper"), new Adress("new", "york")),
  new Person(new Name("Alan", "turing"), new Adress("B", "park")),
  new Person(new Name("Joan", "Clarke"), new Adress("B", "park")),
  new Person(new Name("Joan", "Clarke"), new Adress("London", "Oxford")),
  ,
];

relation.init(persons);
const result = relation.findMinRelationLevel(persons[1], persons[3]);
console.log(result || "Not Related");
