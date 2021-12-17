<template>
  <div class="form-element">
    <label :for="elementId" class="form-label"> {{ labelName }}: </label>
    <input
      :id="elementId"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: `FormElement`,
  props: {
    value: {
      type: String,
      default: null,
    },
    elementId: {
      default: "",
      required: true,
    },
    labelName: {
      default: "",
      required: true,
    },
  },
};
</script>
