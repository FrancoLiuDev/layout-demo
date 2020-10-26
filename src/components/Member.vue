<template>
  <div class="ful-h flrow fl-cet-items">
    <div id="meber-outer" class="flrow fl-cet-items member-lay-border">
      <div class="icon-n massage">
        <ximage class="icon-n"></ximage>
      </div>
      <div
        class="sys-member flrow fl-reverse fl-cet-items  member-lay-border member-bg"
      >
        <div class="tbox">
          <v-clamp autoresize :max-lines="1" class="font-normal ">
            嗨。陳明倫
          </v-clamp>
        </div>
        <ximage class="icon-b banner-bg-color clip"></ximage>
      </div>
      <div class="member-small icon-small ">
        <ximage class="icon-small  icon-b clip"></ximage>
      </div>
    </div>
  </div>
</template>

<script>
import ximage from "./image";
import VClamp from "vue-clamp";
export default {
  name: "",
  components: { ximage, VClamp }
};
</script>

<style lang="scss" scoped>
#meber-outer {
  padding: 5px;
  margin-right: 20px;
}
.clip {
  clip-path: circle(50% at 50% 50%);
}
.sys-member {
  margin-left: 15px;
  padding: 3px 8px 3px 12px;
  height: 43px;
  flex: 1;
}
.member-small {
  display: none;
}
.tbox {
  color: white;
  text-align: center;
  overflow-wrap: anywhere;
  width: 100px;
}

@media (max-width: 470px) {
  .icon-small {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 600px) {
  .massage {
    display: none;
  }
}
@media (max-width: 700px) {
  #meber-outer {
    padding: 0px;
  }
  .sys-member {
    display: none;
  }
  .member-small {
    display: block;
    margin-left: 15px;
    flex: 1;
  }
}
</style>
