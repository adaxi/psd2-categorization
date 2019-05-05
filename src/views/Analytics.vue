<template>
  <div >
      <chart width="400" type="donut" :options="{ labels: Object.keys(transactionsByCategory) }" :series="Object.values(transactionsByCategory)"></chart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Analytics',
  computed: {
    ...mapGetters([
      'transactionsByCategory'
    ])
  }
}
</script>

<style scoped>
</style>
