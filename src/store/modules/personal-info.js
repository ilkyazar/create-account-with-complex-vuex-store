import { createHelpers } from "vuex-map-fields";
import api from "../../utils/api";

import { createPersonalInfo } from "../../models/PersonalInfoModel";
import { createRequest } from "../../models/RequestModel";

import { SUBMIT } from "../action-types";
import { ERROR, SUCCESS } from "../mutation-types";

import name from "./form-sections/name";

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createPersonalInfo({
        name: state.name.rows[0],
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
  name,
};

export const { mapFields: mapNameFields } = createHelpers({
  getterType: `personalInfo/name/getField`,
  mutationType: `personalInfo/name/updateField`,
});

export const personalInfo = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};
