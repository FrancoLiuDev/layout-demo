<template>
  <div class="flcol fl-cet-items  banner-bg-color relate">
    <div id="nav-outer" class="flrow flrow-cet">
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item"></NavButton>
      <NavButton class="nav-item" :active="true"></NavButton>
    </div>
    <div class="abs-r-end">
      <Member></Member>
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton";
import Member from "./Member";

export default {
  name: "",
  components: { NavButton, Member }
};
</script>

<style lang="scss" scoped>
#nav-outer {
  min-width: 300px;
  width: 40%;
  flex: 1;
}
.abs-r-end {
  position: absolute;
  right: 0px;
  top: 50%;
  height: 100%;
  transform: translate(0, -50%);
}
.nav-item {
  width: 65px;
}
</style>
