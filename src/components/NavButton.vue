<template>
  <div class="nav-button flcol fl-cet-items relate">
      <ximage class="icon-s padding-t-s"></ximage>
      <div :class="{'nav-bt-act-text': active }">sdw</div>
      <div class="indcator" :class="{ 'nav-bt-act-color': active }" ></div>
  </div>
</template>

<script>
import ximage from "./image";
export default {
  name: "",
  props: ['active'],
   components: { ximage }
};
</script>

<style lang="scss" scoped>
.nav-button {
}

div{
  color: white;
}
.indcator {
  position: absolute;
  left: 0px;
  bottom:0px;
  width: 100%;
  height: 5px;
}
</style>
