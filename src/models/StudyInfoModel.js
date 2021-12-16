import { createAddress } from "./AddressModel";
import { createEducation } from "./EducationModel";

export class StudyInfoModel {
  constructor({
    education = null,
    address = null,
  } = {}) {
    this.education = education;
    this.address = address;
  }
}

export function createStudyInfo(data) {
  const education = createEducation(data.education);
  const address = createAddress(data.address);
  return Object.freeze(new StudyInfoModel({ education, address }));
}
