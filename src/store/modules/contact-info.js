import { createHelpers } from 'vuex-map-fields';

import api from '../../utils/api';

import { createContactInfo } from '../../models/ContactInfoModel';
import { createRequest } from '../../models/RequestModel';

import { SUBMIT } from '../action-types';
import { ERROR, SUCCESS } from '../mutation-types';

import contact from './form-sections/contact';

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createContactInfo({
        // Multiple contacts are allowed
        contacts: state.contact.rows,
      });
      const requestData = createRequest(customerData);

      await api(requestData);

      commit(SUCCESS);
    } catch (error) {
      commit(ERROR, error.message);
    }
  },
};

const mutations = {
  [ERROR](state, error) {
    state.error = error;
    state.success = false;
  },
  [SUCCESS](state) {
    state.error = false;
    state.success = true;
  },
};

const state = () => ({
  error: false,
  success: false,
});

const modules = {
  contact,
};

export const { mapMultiRowFields: mapContactMultiRowFields } = createHelpers({
  getterType: `contactInfo/contact/getField`,
  mutationType: `contactInfo/contact/updateField`,
});

export const contactInfo = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};