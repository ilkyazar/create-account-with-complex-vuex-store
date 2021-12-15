import { getField, updateField } from "vuex-map-fields";

import { NameModel } from "../../../models/NameModel";

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new NameModel()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
