import { getField, updateField } from "vuex-map-fields";

import { AddressModel } from "../../../models/AddressModel";

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new AddressModel()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
