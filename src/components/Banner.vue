<template>
  <div class="flcol fl-cet-items  banner-bg-color relate">
    <div id="nav-outer" class="flrow flrow-cet">
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item" :active = "true"></NavButton>
    </div>
    <div id="meber-outer" class="abs-r-end ful-h flrow fl-cet-items ">
      <div class="sys-message icon-n">
        <ximage class="icon-n"></ximage>
      </div>
      <div class="sys-member flrow fl-reverse">
        <span>cs</span>
        <ximage class="icon-n"></ximage>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton";
import ximage from "./image";
export default {
  name: "",
  components: { ximage, NavButton }
};
</script>

<style lang="scss" scoped>
#meber-outer {
  margin-right: 20px;
  width: 150px;
  background-color: red;
}

#nav-outer {
  min-width: 300px;
  width: 40%;
  flex: 1;
}
.abs-r-end {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
}
.nav-item {
  width: 65px;
}
.sys-member {
  flex: 1;
  background-color: aliceblue;
}
</style>
