import { getField, updateField } from "vuex-map-fields";

import { EducationModel } from "../../../models/EducationModel";

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new EducationModel()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
