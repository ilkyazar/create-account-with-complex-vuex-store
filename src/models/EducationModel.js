export class EducationModel {
  constructor({ university = ``, department = ``, startDate = `` } = {}) {
    this.university = university;
    this.department = department;
    this.startDate = startDate;
  }
}

export function createEducation(data) {
  return Object.freeze(new EducationModel(data));
}
