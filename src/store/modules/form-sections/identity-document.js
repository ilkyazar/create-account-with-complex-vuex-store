import { getField, updateField } from "vuex-map-fields";

import { IdentityDocumentModel } from "../../../models/IdentityDocumentModel";

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new IdentityDocumentModel()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
