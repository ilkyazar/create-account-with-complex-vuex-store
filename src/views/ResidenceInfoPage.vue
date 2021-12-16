<template>
  <div>
    <h1>Residence Info</h1>
    <section class="form-section">
      <div class="form-element">
        <label for="zip" class="form-label"> ZIP: </label>
        <input id="zip" v-model="zip" />
      </div>
      <div class="form-element">
        <label for="town" class="form-label"> Town: </label>
        <input id="town" v-model="town" />
      </div>
      <div class="form-element">
        <label for="street" class="form-label"> Street: </label>
        <input id="street" v-model="street" />
      </div>
    </section>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SUBMIT } from "../store/action-types";
import store from "../store";
import {
  residenceInfo,
  mapAddressFields,
} from "../store/modules/residence-info";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.residenceInfo)
  store.registerModule(`residenceInfo`, residenceInfo);
const { mapActions: mapResidenceInfoActions, mapState: mapResidenceInfoState } =
  createNamespacedHelpers(`residenceInfo`);

export default {
  name: `ResidenceInfoPage`,
  computed: {
    ...mapResidenceInfoState([`error`, `success`]),
    ...mapAddressFields([`rows[0].zip`, `rows[0].town`, `rows[0].street`]),
  },
  methods: {
    ...mapResidenceInfoActions({
      submit: SUBMIT,
    }),
  },
};
</script>
