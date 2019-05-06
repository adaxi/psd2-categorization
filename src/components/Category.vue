<template>
  <div>
    <el-button
      type="default"
      class="el-button--icon"
      v-shortkey="[ category.shortcut ]"
      @shortkey.native="assign(category)"
      v-on:click="assign(category)"
    >
    <span class="el-icon-round">
      <span :class="`el-button--${category.name.toLowerCase()}`">
        <font-awesome-icon :icon="category.icon" />
      </span>
    </span>
      {{ category.name }}
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

<style scoped lang="scss">

.el-button--icon {
  padding-top: 5px;
  padding-bottom: 5px;
  width: 180px;
}

.el-icon-round {
  display: inline-block;
  padding: 5px;
}

.el-icon-round span {
  border-radius: 50%;
  display: block;
  padding: 8px;
  width: 30px;
  height: 30px;

  line-height: 1;
  text-align: center;
  box-sizing: border-box;
  margin: 0px;
  word-spacing: normal;
}

.el-button--groceries {
  color: #17becf;
  background-color: lighten($color: #17becf, $amount: 40);
}
.el-button--shopping {
  color: #377eb8;
  background-color: lighten($color: #377eb8, $amount: 42);
}
.el-button--restaurants {
  color: #4daf4a;
  background-color: lighten($color: #4daf4a, $amount: 40);
}
.el-button--transport {
  color: #fdad00;
  background-color: lighten($color: #eeca3b, $amount: 32);
}
.el-button--entertainment {
  color: #ff7f00;
  background-color: lighten($color: #ff7f00, $amount: 40);
}
.el-button--travel {
  color: #a65628;
  background-color: lighten($color: #a65628, $amount: 50);
}
.el-button--health {
  color: #e41a1c;
  background-color: lighten($color: #e41a1c, $amount: 45);
}
.el-button--general {
  color: #f781bf;
  background-color: lighten($color: #f781bf, $amount: 18);
}
.el-button--insurance {
  color: #984ea3;
  background-color: lighten($color: #984ea3, $amount: 40);
}
.el-button--cash {
  color: #439894;
  background-color: lighten($color: #439894, $amount: 48);
}
.el-button--transfers {
  color: #83bcb6;
  background-color: lighten($color: #83bcb6, $amount: 27);
}
.el-button--utilities {
  color: #999999;
  background-color: lighten($color: #999999, $amount: 30);
}

.el-button--wealth {
  color: #79706e;
  background-color: lighten($color: #79706e, $amount: 40);
}

</style>
