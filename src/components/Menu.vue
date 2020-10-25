<template>
  <div class="content ">
    <div class="menu-lay-border">
      <div class="mu-outer">
        <!-- title -->
        <div class="title">
          <div class="flrow fl-cet-items">
            <span class="">s</span>
          </div>
        </div>
        <!-- items -->
        <div class="menu-lay-border items">
          <div class="flrow fl-cet-items" >
            <span class=" ">menu 1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ximage from "./image";
export default {
  name: ""
  // components: { ximage }
};
</script>

<style lang="scss" scoped>
.menu-lay-border span {
  color: red;
  padding-left: 5px;
  height: 18px;
  font-size: 15px;
}
.title > div {
  padding-left: 15px;
  height: 100%;
}
.items > div {
  padding-left: 15px;
  height: 100%;
}

.mu-outer > .items {
  height: 45px;
}
.title {
  height: 45px;
}
.mu-outer {
  .items {
    padding-left: 15px;
  }
}
</style>
