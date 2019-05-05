
import faker from 'faker'

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

function getTransactions (count = 10) {
  const transactions = []
  for (let i = 0; i < count; i++) {
    transactions.push({
      id: faker.random.uuid(),
      amount: faker.finance.amount(),
      details: faker.company.companyName()
    })
  }
  return transactions
};

const store = new Vuex.Store({
  plugins: [createLogger()],
  state: {
    categories: [
      { name: 'Groceries', shortcut: '1', icon: 'shopping-cart' },
      { name: 'Shopping', shortcut: '2', icon: 'shopping-bag' },
      { name: 'Restaurants', shortcut: '3', icon: 'utensils' },
      { name: 'Transport', shortcut: '4', icon: 'bus' },
      { name: 'Entertainment', shortcut: '5', icon: 'film' },
      { name: 'Travel', shortcut: '6', icon: 'plane' },
      { name: 'Health', shortcut: '7', icon: 'hospital' },
      { name: 'General', shortcut: '8', icon: 'question' },
      { name: 'Utilities', shortcut: '9', icon: 'bolt' },
      { name: 'Cash', shortcut: '0', icon: 'money-bill-wave' },
      { name: 'Transfers', shortcut: 'a', icon: 'exchange-alt' },
      { name: 'Insurance', shortcut: 'b', icon: 'car-crash' },
      { name: 'Wealth', shortcut: 'c', icon: 'dollar-sign' }
    ],
    transactions: getTransactions()
  },
  getters: {
    transaction: (state) => state.transactions.find(t => !t.category),
    transactionsByCategory: (state) => {
      const series = {}
      for (let [ , { category: { name = 'Unknown' } = {} } = {} ] of Object.entries(state.transactions)) {
        if (name) {
          series[name] = series[name] === undefined ? 1 : series[name] + 1
        }
      }
      return series
    },
    done: (state) => state.transactions.filter(t => t.category),
    todo: (state) => state.transactions.filter(t => !t.category),
    progress: (state) => state.transactions.length
      ? (state.transactions.filter(t => t.category).length / state.transactions.length) * 100
      : 100
  },
  mutations: {
    assign ({ transactions }, category) {
      const transaction = transactions.find(t => !t.category)
      if (transaction) {
        const index = transactions.indexOf(transaction)
        Vue.set(transactions[index], 'category', category)
      }
    },
    unassign ({ transactions }, transaction) {
      if (transaction) {
        const index = transactions.indexOf(transaction)
        Vue.set(transactions[index], 'category', undefined)
      }
    }
  }
})

export default store
