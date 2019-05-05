<template>
  <div>
    <el-table :data="transactions">
      <el-table-column
        prop="details"
        label="Details">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Amount">
      </el-table-column>
      <el-table-column
        v-if="category !== false"
        label="Category"
      >
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.category"
            closable
            @close="unassign(scope.row)">
            {{ scope.row.category.name }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Transactions',
  props: [ 'transactions', 'category' ],
  methods: {
    ...mapMutations([ 'unassign' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
