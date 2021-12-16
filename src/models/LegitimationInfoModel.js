import { createIdentityDocument } from "./IdentityDocumentModel";

export class LegitimationInfoModel {
  constructor({ identityDocument = null } = {}) {
    this.identityDocument = identityDocument;
  }
}

export function createLegitimationInfo(data) {
  const identityDocument = createIdentityDocument(data.identityDocument);

  return Object.freeze(new LegitimationInfoModel({ identityDocument }));
}
