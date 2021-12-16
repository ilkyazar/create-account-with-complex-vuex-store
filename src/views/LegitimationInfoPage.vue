<template>
  <div>
    <h1>Legitimation Info</h1>

    <div class="form-sections">
      <section class="form-section">
        <div class="form-element">
          <label for="idNumber" class="form-label"> ID Number: </label>
          <input id="idNumber" v-model="idNumber" />
        </div>
        <div class="form-element">
          <label for="issuingAuthority" class="form-label"> Issuing Authority: </label>
          <input id="issuingAuthority" v-model="issuingAuthority" />
        </div>
      </section>
    </div>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SUBMIT } from "../store/action-types";
import store from "../store";
import { legitimationInfo, mapNameFields } from "../store/modules/legitimation-info";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.legitimationInfo)
  store.registerModule(`legitimationInfo`, legitimationInfo);
const { mapActions: mapLegitimationInfoActions, mapState: mapLegitimationInfoState } =
  createNamespacedHelpers(`legitimationInfo`);

export default {
  name: `LegitimationInfoPage`,
  computed: {
    ...mapLegitimationInfoState([`error`, `success`]),
    ...mapNameFields([`rows[0].idNumber`, `rows[0].issuingAuthority`]),
  },
  methods: {
    ...mapLegitimationInfoActions({
      submit: SUBMIT,
    }),
  },
};
</script>
