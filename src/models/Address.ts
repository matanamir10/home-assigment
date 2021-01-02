export class Adress {
  constructor(public street: string, public city: string) {}

  get fullAdress(): string {
    return `${this.street} ${this.city}`;
  }
}
