import { createAddress } from './AddressModel';

export class ResidenceInfoModel {
  constructor({ address = null } = {}) {
    this.address = address;
  }
}

export function createResidenceInfo(data) {
  const address = createAddress(data.address);

  return Object.freeze(new ResidenceInfoModel({ address }));
}