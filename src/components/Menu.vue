<template>
  <div class="content menu-padding-top">
    <div class="menu-lay-border menu-back ">
      <div class="mu-outer">
        <!-- title -->
        <div class="title">
          <div class="flrow fl-cet-items">
            <div class="" style="width: 15px;"></div>
            <ximage class="icon-s"></ximage><span class="">s</span>
          </div>
        </div>
        <!-- items -->
        <div class="items ">
          <div class="item ">
            <div class="flrow fl-cet-items">
              <div class="title-space" style="width: 30px;"></div>
              <ximage class="icon-s"></ximage><span class=" ">menu 1</span>
            </div>
          </div>
          <div class="item">
            <div class="flrow fl-cet-items">
              <div class="title-space" style="width: 30px;"></div>
              <ximage class="icon-s"></ximage><span class=" ">menu 1</span>
            </div>
          </div>
          <div class="mu-outer ">
            <!-- title -->
            <div class="title">
              <div class="flrow fl-cet-items">
                <div class="space-one" style="width: 45px;"></div>
                <ximage class="icon-s"></ximage><span class="">s</span>
              </div>
            </div>
            <div class="items">
              <div class="item">
                <div
                  class="flrow fl-cet-items menu-lay-border menu-select-color"
                >
                  <div class="space-two" style="width: 60px;"></div>
                  <ximage class="icon-s"></ximage><span class=" ">menu 1</span>
                </div>
              </div>
              <div class="item ">
                <div class="flrow fl-cet-items">
                  <div class="space-two" style="width: 60px;"></div>
                  <ximage class="icon-s"></ximage><span class=" ">menu 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ximage from "./image";
export default {
  name: "",
  components: { ximage }
};
</script>

<style lang="scss" scoped>
.menu-lay-border span {
  padding-left: 5px;
  height: 18px;
  font-size: 15px;
}
.title > div {
  height: 100%;
}
.item > div {
  height: 100%;
}
.item {
   height: $menu-li-height;
}
.title {
  height: $menu-li-height;
}

.title-space {
  width: 15px;
}
.space-one {
  width: 30px;
}
.space-two {
  width: 45px;
}
</style>
