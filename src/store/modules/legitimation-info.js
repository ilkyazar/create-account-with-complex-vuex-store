import { createHelpers } from "vuex-map-fields";
import api from "../../utils/api";

import { createLegitimationInfo } from "../../models/LegitimationInfoModel";
import { createRequest } from "../../models/RequestModel";

import { SUBMIT } from "../action-types";
import { ERROR, SUCCESS } from "../mutation-types";

import identityDocument from "./form-sections/identity-document";

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createLegitimationInfo({
        identityDocument: state.identityDocument.rows[0],
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
  identityDocument,
};

export const { mapFields: mapNameFields } = createHelpers({
  getterType: `legitimationInfo/identityDocument/getField`,
  mutationType: `legitimationInfo/identityDocument/updateField`,
});

export const legitimationInfo = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};
