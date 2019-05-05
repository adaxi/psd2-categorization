<template>
  <div>
    {{ transaction.details }} - {{ transaction.amount }}
    <el-tag v-if="transaction.category" class="category">{{ transaction.category.name }}</el-tag>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  props: [ 'transaction' ]
}
</script>

<style scoped>
.category {
  font-style: italic;
}
</style>
