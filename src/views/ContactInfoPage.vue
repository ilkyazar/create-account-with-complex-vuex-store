<template>
  <div>
    <h1>Contact Info</h1>
    <div class="form-sections">
      <section class="form-section">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="form-repeatable"
        >
          <div class="form-element">
            <label for="email" class="form-label"> E-Mail: </label>
            <input id="email" v-model="contact.email" type="email" />
          </div>
          <div class="form-element">
            <label for="phone" class="form-label"> Phone: </label>
            <input id="phone" v-model="contact.phone" />
          </div>
        </div>
        <button class="form-button" @click="addContact">Add contact</button>
      </section>
    </div>

    <button class="form-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { SUBMIT } from '../store/action-types';
import { ADD_ROW } from '../store/mutation-types';
import store from '../store';
import {
  contactInfo,
  mapContactMultiRowFields,
} from '../store/modules/contact-info';

if (!store.state.contactInfo) store.registerModule(`contactInfo`, contactInfo);

const { mapActions, mapState } = createNamespacedHelpers(`contactInfo`);
const {
  mapMutations: mapContactMutations,
} = createNamespacedHelpers(`contactInfo/contact`);

export default {
  name: `ContactInfoPage`,
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
