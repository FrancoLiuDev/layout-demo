<template>
  <div class="flcol flcol-cet ful-w cls-content">
    <Indicator id="indicator" class="cls-width"></Indicator>
    <div id="cls-ls" class="cls-width flcol flcol-cet">
      <div id="sche-title" class="ful-w"></div>
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
  // height: 100%;
  background-color: aquamarine;
}
.cls-width {
  width: 80%;
}
#indicator {
  margin-top: 80px;
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
}
</style>
