<template>
  <div>
    <h1>Personal Info</h1>
    <p v-if="success" class="success">SUCCESS!</p>
    <div class="form-sections">
      <FormSection>
        <FormElement
          elementId="firstName"
          labelName="First name"
          v-model="firstName"
        />
        <FormElement
          elementId="lastName"
          labelName="Last name"
          v-model="lastName"
        />
      </FormSection>
    </div>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SUBMIT } from "@/store/action-types";
import store from "@/store";
import { personalInfo, mapNameFields } from "@/store/modules/personal-info";
import FormSection from "@/components/FormSection";
import FormElement from "@/components/FormElement";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.personalInfo)
  store.registerModule(`personalInfo`, personalInfo);
const { mapActions: mapPersonalInfoActions, mapState: mapPersonalInfoState } =
  createNamespacedHelpers(`personalInfo`);

export default {
  name: `PersonalInfoPage`,
  components: {
    FormSection,
    FormElement,
  },
  computed: {
    ...mapPersonalInfoState([`error`, `success`]),
    ...mapNameFields([`rows[0].firstName`, `rows[0].lastName`]),
  },
  methods: {
    ...mapPersonalInfoActions({
      submit: SUBMIT,
    }),
  },
};
</script>
