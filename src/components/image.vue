<template>
  <div>
    <div class="content"></div>
    <!-- <div class="image" :style="`width: ${this.width}px; height:${this.width}px;`"></div> -->
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(../assets/logo.png);
}
.image {
  background-size: cover;
  background-image: url(../assets/logo.png);
}
</style>
