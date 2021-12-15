import { createName } from './NameModel';

export class PersonalInfoModel {
  constructor({ name = null } = {}) {
    this.name = name;
  }
}

export function createPersonalInfo(data) {
  const name = createName(data.name);

  return Object.freeze(new PersonalInfoModel({ name }));
}