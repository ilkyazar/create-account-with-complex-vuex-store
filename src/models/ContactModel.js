export class ContactModel {
  constructor({ email = ``, phone = `` } = {}) {
    this.email = email;
    this.phone = phone;
  }
}

export function createContact(data) {
  return Object.freeze(new ContactModel(data));
}
