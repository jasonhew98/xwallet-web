<template>
  <div class="awesome__text-box-container">
    <awesome-question :label="label" :tooltip="tooltip"></awesome-question>
    <v-date-picker
      v-model="selectedDate"
      hide-header
    ></v-date-picker>
  </div>
</template>

<script setup>
import AwesomeQuestion from './AwesomeQuestion.vue';

import { ref, watch } from 'vue';

const selectedDate = ref();

const props = defineProps({
  modelValue: { type: [null, Date], required: true, default: null },
  label: { type: String, required: false, default: undefined },
  tooltip: { type: String, required: false, default: undefined },
  placeholder: { type: String, required: false, default: undefined },
  readonly: { type: Boolean, required: false, default: false },
});

const emit = defineEmits(['update:modelValue']);

const init = () => {
  selectedDate.value = props.modelValue;
};

watch(selectedDate, () => {
  emit('update:modelValue', selectedDate.value);
});
</script>

<style lang="scss" scoped>
.awesome__text-box-container {

  .awesome__text-box {
    @apply flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 text-white border-b border-solid border-gray-dark focus:border-gray-light;
  }

  .awesome__text-box::placeholder {
    opacity: .5;
  }
}
</style>