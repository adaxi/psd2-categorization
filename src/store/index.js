
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
      { name: 'Groceries', shortcut: '1', icon: 'shopping-cart', color: '#17becf' },
      { name: 'Shopping', shortcut: '2', icon: 'shopping-bag', color: '#377eb8' },
      { name: 'Restaurants', shortcut: '3', icon: 'utensils', color: '#4daf4a' },
      { name: 'Transport', shortcut: '4', icon: 'bus', color: '#984ea3' },
      { name: 'Entertainment', shortcut: '5', icon: 'film', color: '#ff7f00' },
      { name: 'Travel', shortcut: '6', icon: 'plane', color: '#a65628' },
      { name: 'Health', shortcut: '7', icon: 'hospital', color: '#e41a1c' },
      { name: 'General', shortcut: '8', icon: 'question', color: '#f781bf' },
      { name: 'Insurance', shortcut: '9', icon: 'car-crash', color: '#eeca3b' },
      { name: 'Cash', shortcut: '0', icon: 'money-bill-wave', color: '#439894' },
      { name: 'Transfers', shortcut: 'a', icon: 'exchange-alt', color: '#83bcb6' },
      { name: 'Utilities', shortcut: 'b', icon: 'bolt', color: '#999999' },
      { name: 'Wealth', shortcut: 'c', icon: 'dollar-sign', color: '#79706e' }
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
