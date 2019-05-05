<template>
  <div>
    <div class="categories">
      <category
        class="category"
        v-for="category in categories"
        v-bind:key="category.name"
        v-bind:category="category"
      ></category>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category'
import { mapState } from 'vuex'

export default {
  name: 'Categories',
  components: {
    Category
  },
  computed: {
    ...mapState([ 'categories' ])
  }
}
</script>

<style scoped>
.categories {
  display: flex;
  flex-wrap: wrap;
}
.category {
  margin-bottom: 5px;
  flex-grow: 1;
  width: 33%;
}
</style>
