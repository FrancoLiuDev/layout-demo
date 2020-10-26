<template>
  <div
    class="cmd button-border nav-button flrow fl-cet-items fl-cet-just  relate"
  >
    <ximage class="icon-s padding-r-s"></ximage>
    <div ref="bt" :class="{ 'nav-bt-act-text': active }">{{ text }}</div>
  </div>
</template>

<script>
import ximage from "./image";
export default {
  name: "",
  props: ["active", "text", "color"],
  components: { ximage },
 
};
</script>

<style lang="scss" scoped>
.cmd {
  flex: 1;
  margin: 5px;
  background-color: white; /* Green */
  border: none;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
}
div {
  color: gray;
}
div[hide="true"] {
  display: none;
}
</style>
