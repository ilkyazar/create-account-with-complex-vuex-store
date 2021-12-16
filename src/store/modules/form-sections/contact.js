import { getField, updateField } from 'vuex-map-fields';

import { ADD_ROW } from '../../mutation-types';
import { ContactModel } from '../../../models/ContactModel';

const mutations = {
  updateField,
  [ADD_ROW](state) {
    state.rows.push(new ContactModel());
  },
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new ContactModel()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};