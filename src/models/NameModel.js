export class NameModel {
  constructor({ firstName = ``, lastName = `` } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export function createName(data) {
  return Object.freeze(new NameModel(data));
}
