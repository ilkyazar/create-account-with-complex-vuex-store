<template>
  <div>
    <h1>Contact Info</h1>
    <p v-if="success" class="success">SUCCESS!</p>
    <div class="form-sections">
      <FormSection>
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="form-repeatable"
        >
          <FormElement
            elementId="email"
            labelName="E-Mail"
            v-model="contact.email"
          />
          <FormElement
            elementId="phone"
            labelName="Phone"
            v-model="contact.phone"
          />
        </div>
        <button class="form-button" @click="addContact">Add contact</button>
      </FormSection>
    </div>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { SUBMIT } from "../store/action-types";
import { ADD_ROW } from "../store/mutation-types";
import store from "../store";
import {
  contactInfo,
  mapContactMultiRowFields,
} from "../store/modules/contact-info";
import FormSection from "@/components/FormSection";
import FormElement from "@/components/FormElement";

if (!store.state.contactInfo) store.registerModule(`contactInfo`, contactInfo);

const { mapActions, mapState } = createNamespacedHelpers(`contactInfo`);
const { mapMutations: mapContactMutations } =
  createNamespacedHelpers(`contactInfo/contact`);

export default {
  name: `ContactInfoPage`,
  components: {
    FormSection,
    FormElement,
  },
  computed: {
    ...mapState([`error`, `success`]),
    ...mapContactMultiRowFields({ contacts: `rows` }),
  },
  methods: {
    ...mapContactMutations({
      addContact: ADD_ROW,
    }),
    ...mapActions({
      submit: SUBMIT,
    }),
  },
};
</script>
