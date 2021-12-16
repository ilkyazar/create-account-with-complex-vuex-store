import { createHelpers } from "vuex-map-fields";
import api from "../../utils/api";

import { createResidenceInfo } from "../../models/ResidenceInfoModel";
import { createRequest } from "../../models/RequestModel";

import { SUBMIT } from "../action-types";
import { ERROR, SUCCESS } from "../mutation-types";

import address from "./form-sections/address";

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createResidenceInfo({
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
  address,
};

export const { mapFields: mapAddressFields } = createHelpers({
  getterType: `residenceInfo/address/getField`,
  mutationType: `residenceInfo/address/updateField`,
});

export const residenceInfo = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};
