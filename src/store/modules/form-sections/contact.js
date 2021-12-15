import { getField, updateField } from 'vuex-map-fields';

import { ADD_ROW } from '../../mutation-types';
import { Contact } from '../../../models/ContactModel';

const mutations = {
  updateField,
  [ADD_ROW](state) {
    state.rows.push(new Contact());
  },
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new Contact()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};