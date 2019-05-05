<template>
  <div >
      <div class="grid-container">
        <div v-if="transaction">
          <h2>Transaction</h2>
          <transaction  v-bind:transaction="transaction" class="current-transaction"></transaction>
          <el-progress :percentage="progress"></el-progress>
        </div>
        <div v-if="!transaction">
          <h2>Transaction</h2>
          All transactions have been categorized
        </div>
        <div>
          <h2>Categories</h2>
          <categories class="categories"></categories>
        </div>
        <div>
          <h2>Next</h2>
          <transactions v-bind:transactions="todo" v-bind:category="false"></transactions>
        </div>
        <div>
          <h2>Done</h2>
          <transactions v-bind:transactions="done.reverse()"></transactions>
        </div>
      </div>
  </div>
</template>

<script>
import Categories from '@/components/Categories'
import Transactions from '@/components/Transactions'
import Transaction from '@/components/Transaction'
import { mapGetters } from 'vuex'

export default {
  name: 'ManualCategorization',
  components: {
    Categories,
    Transactions,
    Transaction
  },
  computed: {
    ...mapGetters([
      'transaction',
      'todo',
      'done',
      'progress'
    ])
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.current-transaction {
  margin-bottom: 100px;
}
</style>
