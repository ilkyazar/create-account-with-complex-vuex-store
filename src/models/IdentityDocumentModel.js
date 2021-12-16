export class IdentityDocumentModel {
  constructor({ idNumber = ``, issuingAuthority = `` } = {}) {
    this.idNumber = idNumber;
    this.issuingAuthority = issuingAuthority;
  }
}

export function createIdentityDocument(data) {
  return Object.freeze(new IdentityDocumentModel(data));
}
