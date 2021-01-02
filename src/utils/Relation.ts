import { LinkedList } from "./../models/LinkedList";
import { Person } from "./../models/Person";

export class Relation {
  private people: Person[];

  init(pepole: Person[]): void {
    this.people = pepole;
  }

  findMinRelationLevel(personOne: Person, personTwo: Person): number {
    if (Person.compareNameOrCityEqual(personOne, personTwo).isEqual) {
      return 1;
    }

    const linkedList = new LinkedList<Person>();

    for (let j = 0; j < this.people.length; j++) {
      let relatedConnector = null;
      const { isEqual } = Person.compareNameOrCityEqual(
        personOne,
        this.people[j]
      );
      if (isEqual) {
        const { isEqual, connector } = Person.compareNameOrCityEqual(
          personTwo,
          this.people[j]
        );
        if (isEqual) {
          return linkedList.size() + 1;
        }
        linkedList.insertInBegin(this.people[j]);
        relatedConnector = connector;
      } else {
        const last = linkedList.getLast(linkedList.head);
        if (!last) {
          continue;
        }
        const { isEqual, connector } = Person.compareNameOrCityEqual(
          last.data,
          this.people[j]
        );
        if (isEqual) {
          if (relatedConnector === connector) {
            linkedList.deleteNode(last);
            linkedList.insertInBegin(this.people[j]);
          }
          relatedConnector = connector;
        }
      }
    }
  }
}
