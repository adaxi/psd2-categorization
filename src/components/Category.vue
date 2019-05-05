<template>
  <div>
    <el-button
      v-shortkey="[ category.shortcut ]"
      @shortkey.native="assign(category)"
      v-on:click="assign(category)"
    >
      <font-awesome-icon :icon="category.icon" /> {{ category.name }}
    </el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Category',
  props: [ 'category' ],
  methods: {
    ...mapMutations([ 'assign' ])
  }
}
</script>

<style scoped>
</style>
