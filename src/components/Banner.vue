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
  min-width: 200px;
  width: 40%;
  flex: 1;
}

.nav-item {
  width: 65px;
}
</style>
