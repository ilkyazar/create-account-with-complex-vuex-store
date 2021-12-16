import { createContact } from "./ContactModel";

export class ContactInfoModel {
  constructor({ contacts = [] } = {}) {
    this.contacts = contacts;
  }
}

export function createContactInfo(data) {
  const contacts = data.contacts.map((x) => createContact(x));
  return Object.freeze(new ContactInfoModel({ contacts }));
}
