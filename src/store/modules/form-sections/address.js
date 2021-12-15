import { getField, updateField } from "vuex-map-fields";

import { Address } from "../../../models/AddressModel";

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new Address()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
