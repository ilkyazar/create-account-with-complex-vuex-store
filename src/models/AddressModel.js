export class AddressModel {
  constructor({ street = ``, town = ``, zip = `` } = {}) {
    this.street = street;
    this.town = town;
    this.zip = zip;
  }
}

export function createAddress(data) {
  return Object.freeze(new AddressModel(data));
}
