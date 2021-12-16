<template>
  <div>
    <h1>Study Info</h1>
    <section class="form-section">
      <div class="form-element">
        <label for="university" class="form-label"> University: </label>
        <input id="university" v-model="university" />
      </div>
      <div class="form-element">
        <label for="department" class="form-label"> Department: </label>
        <input id="department" v-model="department" />
      </div>
      <div class="form-element">
        <label for="startDate" class="form-label"> Start Date: </label>
        <input id="startDate" v-model="startDate" />
      </div>
    </section>

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
import { studyInfo, mapEducationFields, mapAddressFields } from "../store/modules/study-info";

// Only load module when needed. It can be already registered if webpacks are hot reloading.
if (!store.state.studyInfo) store.registerModule(`studyInfo`, studyInfo);
const { mapActions: mapStudyInfoActions, mapState: mapStudyInfoState } =
  createNamespacedHelpers(`studyInfo`);

export default {
  name: `StudyInfoPage`,
  computed: {
    ...mapStudyInfoState([`error`, `success`]),
    ...mapEducationFields([
      `rows[0].university`,
      `rows[0].department`,
      `rows[0].startDate`,
    ]),
    ...mapAddressFields([`rows[0].zip`, `rows[0].town`, `rows[0].street`]),
  },
  methods: {
    ...mapStudyInfoActions({
      submit: SUBMIT,
    }),
  },
};
</script>
