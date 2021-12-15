<template>
  <div>
    <h1>Personal Info</h1>

    <div class="form-sections">
      <section class="form-section">
        <div class="form-element">
          <label for="firstName" class="form-label"> First name: </label>
          <input id="firstName" v-model="firstName" />
        </div>
        <div class="form-element">
          <label for="lastName" class="form-label"> Last name: </label>
          <input id="lastName" v-model="lastName" />
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
import { personalInfo, mapNameFields } from "../store/modules/personal-info";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.personalInfo)
  store.registerModule(`personalInfo`, personalInfo);
const { mapActions: mapPersonalInfoActions, mapState: mapPersonalInfoState } =
  createNamespacedHelpers(`personalInfo`);

export default {
  name: `PersonalInfoPage`,
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
