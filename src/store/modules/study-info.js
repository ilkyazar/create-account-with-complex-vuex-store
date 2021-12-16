import { createHelpers } from "vuex-map-fields";
import api from "../../utils/api";

import { createStudyInfo } from "../../models/StudyInfoModel";
import { createRequest } from "../../models/RequestModel";

import { SUBMIT } from "../action-types";
import { ERROR, SUCCESS } from "../mutation-types";

import education from "./form-sections/education";
import address from "./form-sections/address";

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createStudyInfo({
        education: state.education.rows[0],
        address: state.address.rows[0],
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
  education,
  address,
};

export const { mapFields: mapEducationFields } = createHelpers({
  getterType: `studyInfo/education/getField`,
  mutationType: `studyInfo/education/updateField`,
});

export const { mapFields: mapAddressFields } = createHelpers({
  getterType: `studyInfo/address/getField`,
  mutationType: `studyInfo/address/updateField`,
});

export const studyInfo = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};
