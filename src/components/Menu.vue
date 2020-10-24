<template>
  <div class="content">
    <div class="mu-outer">menu 1</div>
    <div class="mu-outer">
      <div class="mu-item">menu 1</div>
      <div class="mu-item">menu 1</div>
      <div class="mu-item">menu 1</div>
    </div>
    <div class="mu-outer">menu 1</div>
    <div class="mu-outer">
      <div class="mu-item">menu 1</div>
      <div class="mu-item">menu 1</div>
      <div class="mu-outer">
        <div class="mu-item">menu 1</div>
        <div class="mu-item">menu 1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
.mu-outer {
  background-color: orange;
  div {
    background-color: aliceblue;
    margin-left: 15px;
  }
}
.mu-item {
  height: 32px;
  background-color: orange;
  div {
    background-color: aliceblue;
    margin-left: 15px;
  }
}
</style>
