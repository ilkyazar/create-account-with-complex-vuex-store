<template>
  <div>
    <h1>Legitimation Info</h1>
    <p v-if="success" class="success">SUCCESS!</p>
    <div class="form-sections">
      <FormSection>
        <FormElement
          elementId="idNumber"
          labelName="ID Number"
          v-model="idNumber"
        />
        <FormElement
          elementId="issuingAuthority"
          labelName="Issuing Authority"
          v-model="issuingAuthority"
        />
      </FormSection>
    </div>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SUBMIT } from "../store/action-types";
import store from "../store";
import {
  legitimationInfo,
  mapNameFields,
} from "../store/modules/legitimation-info";
import FormSection from "@/components/FormSection";
import FormElement from "@/components/FormElement";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.legitimationInfo)
  store.registerModule(`legitimationInfo`, legitimationInfo);
const {
  mapActions: mapLegitimationInfoActions,
  mapState: mapLegitimationInfoState,
} = createNamespacedHelpers(`legitimationInfo`);

export default {
  name: `LegitimationInfoPage`,
  components: {
    FormSection,
    FormElement,
  },
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
