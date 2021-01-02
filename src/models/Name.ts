export class Name {
  constructor(public firstName: string, public lastname: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastname}`;
  }
}
