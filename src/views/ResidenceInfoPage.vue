<template>
  <div>
    <h1>Residence Info</h1>
    <p v-if="success" class="success">SUCCESS!</p>
    <FormSection>
      <FormElement elementId="zip" labelName="ZIP" v-model="zip" />
      <FormElement elementId="town" labelName="Town" v-model="town" />
      <FormElement elementId="street" labelName="Street" v-model="street" />
    </FormSection>

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
import FormSection from "@/components/FormSection";
import FormElement from "@/components/FormElement";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.residenceInfo)
  store.registerModule(`residenceInfo`, residenceInfo);
const { mapActions: mapResidenceInfoActions, mapState: mapResidenceInfoState } =
  createNamespacedHelpers(`residenceInfo`);

export default {
  name: `ResidenceInfoPage`,
  components: {
    FormSection,
    FormElement,
  },
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
