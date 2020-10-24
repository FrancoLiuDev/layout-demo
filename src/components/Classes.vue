<template>
  <div class="flcol fl-cet-items  cls-content">
    <Indicator id="indicator" class="cls-width"></Indicator>
    <div id="cls-ls" class="cls-width flcol fl-cet-items  box">
      <div id="sche-title" class="">fefg</div>
      <div id="sche-outer">
        <Schedule class="schedule"> </Schedule>
        <Schedule class="schedule"> </Schedule>
        <Schedule class="schedule"> </Schedule>
      </div>
    </div>
  </div>
</template>

<script>
import Indicator from "./Indicator";
import Schedule from "./Schedule";
export default {
  name: "",
  components: { Indicator, Schedule }
};
</script>

<style lang="scss" scoped>
.cls-content {
  background-color: aquamarine;
}
.cls-width {
  width: 80%;
}
#indicator {
  margin-top: 60px;
}
#sche-title {
  height: 70px;
  background-color: aqua;
}
#sche-outer {
  padding-top: 25px;
  background-color: aquamarine;
}
#cls-ls {
  margin-top: 25px;
  min-height: 650px;
  background-color: antiquewhite;
}
.schedule {
  width: 400px;
  height: 150px;
  margin-top: 15px;
  background-color: sandybrown;
}

.box {
  background: #a7c7d3;
  position: relative;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.box:before,
.box:after {
  content: "";
  width: 50%;
  background: #000;
  z-index: -1;
  position: absolute;
  top: -6px;
  bottom: 15px;
  left: 10px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.5);
  transform: rotate(-3deg);
}
.box:after {
  right: 16px;
  left: auto;
  transform: rotate(3deg);
}
</style>
