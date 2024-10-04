<template>
  <a-row justify="center" :gutter="16">
    <a-col :span="12">
      <h1>Expense Tracker</h1>
      <a-form @submit.prevent="addExpense">
        <a-form-item label="Expense Name">
          <a-input v-model="name" />
        </a-form-item>
        <a-form-item label="Amount">
          <a-input-number v-model="amount" :min="1" />
        </a-form-item>
        <a-form-item label="Date">
          <a-date-picker v-model="date" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="addExpense">Add Expense</a-button>
        </a-form-item>
      </a-form>

      <a-list
        :dataSource="expenses"
        :renderItem="item => (
          <a-list-item>
            <a-list-item-meta
              :title="`${item.name} - $${item.amount}`"
              :description=`item.date`
            />
          </a-list-item>
        )"
      />
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      amount: 0,
      date: null,
      expenses: [],
    };
  },
  async fetch() {
    this.expenses = await this.$axios.$get('/api/expenses');
  },
  methods: {
    async addExpense() {
      if (this.name && this.amount && this.date) {
        const newExpense = await this.$axios.$post('/api/expenses', {
          name: this.name,
          amount: this.amount,
          date: this.date.format('YYYY-MM-DD'),
        });
        this.expenses.push(newExpense);
        this.name = '';
        this.amount = 0;
        this.date = null;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
