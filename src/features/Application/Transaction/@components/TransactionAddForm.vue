<template>
  <form class="space-y-6" @submit.prevent="addTransaction">
    <div class="space-y-1">
      <awesome-drop-down label="Main Category" v-model="transaction.mainCategory"
        :options="options.mainCategories.value"></awesome-drop-down>
    </div>
    <div class="space-y-1">
      <awesome-drop-down label="Sub Category" v-model="transaction.subCategory" :options="filteredSubCategories"
        keyField="subCategoryId"></awesome-drop-down>
    </div>
    <div class="space-y-1">
      <AwesomeTextBox label="Notes" v-model="transaction.notes"></AwesomeTextBox>
    </div>
    <div class="space-y-1">
      <AwesomeDatePicker label="Transaction Date" v-model="transaction.transactionDate"></AwesomeDatePicker>
    </div>
    <div class="space-y-1">
      <awesome-drop-down label="Payment Method" v-model="transaction.paymentMethod"
        :options="options.paymentMethods.value"></awesome-drop-down>
    </div>
    <div class="space-y-1">
      <AwesomeTextBox label="Payment Amount" v-model="transaction.paymentAmount"></AwesomeTextBox>
    </div>
    <button type="submit" class="inline-flex items-center justify-center space-x-2 rounded-lg border border-green bg-green px-3 py-2 text-sm font-semibold leading-5 text-black
            hover:border-green-dark hover:bg-green-dark transition-colors duration-200 ease-in-out">
      Add Transaction
    </button>
  </form>
</template>

<script setup>
import AwesomeDatePicker from '@/components/AwesomeDatePicker.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';

import { computed, ref, reactive, inject } from 'vue';

import { usePageStateStore } from '@/infrastructure/stores/pageState.js';
import { formatDateToUTC } from '@/seedwork/formatters/dateFormatter';

const pageStateStore = usePageStateStore();

const transactionRepository = inject('transactionRepository');

const transaction = reactive({
  mainCategory: "",
  subCategory: "",
  transactionDate: null,
  notes: "",
  paymentMethod: "",
  paymentAmount: ""
});

const options = inject('options', {
  mainCategories: ref([]),
  subCategories: ref([]),
  paymentMethods: ref([]),
});

const filteredSubCategories = computed(() => {
  const selectedCategory = transaction.mainCategory;
  let subCategories = [];

  if (selectedCategory) {
    subCategories = options.subCategories.value.find(
      x => x.categoryId.toLowerCase() == selectedCategory.toLowerCase()
    ).subCategories;
  }

  return subCategories;
});

const forceRefresh = inject('forceRefresh', () => { });

const addTransaction = async () => {
  try {
    const record = {
      ...transaction,
      transactionDate: formatDateToUTC(transaction.transactionDate)
    };

    pageStateStore.setLoading({
      title: "Processing Transaction...",
      body: "Please wait while we create your transaction. This should only take a moment."
    });
    const [error, result] = await transactionRepository.addTransaction(record);
    if (error) {
      pageStateStore.setError({});
      return;
    }

    pageStateStore.setCompleted({});
    forceRefresh();
  } catch (err) {
    pageStateStore.setError({});
  }
};

</script>