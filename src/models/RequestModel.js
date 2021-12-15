export class RequestModel {
  constructor(data = {}) {
    this.data = data;
  }
}

export function createRequest(data) {
  return Object.freeze(new RequestModel(data));
}
