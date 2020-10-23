<template>
  <div class="flcol flcol-cet cls-content">
    <Indicator id="indicator" class="cls-width"></Indicator>
    <div id="cls-ls" class="cls-width">
      <div id="sche-title"></div>
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
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
.cls-width {
  width: 80%;
}
#indicator {
  margin-top: 80px;
}
#sche-title {
  width: 100%;
  height: 70px;
  background-color: aqua;
}
#sche-outer {
  padding-top: 25px;

  background-color: aquamarine;
}
#cls-ls {
  display: flex;
  flex-direction: column;
  align-items: center;
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
