<template>
  <div class="flcol fl-cet-items  cls-content flcol">
    <Indicator id="indicator" class="cls-width meddle-hide"></Indicator>
    <div id="cls-ls" class="cls-width flcol fl-cet-items box">
      <div id="sche-title" class="meddle-hide">fefg</div>
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
  width: 95%;
}
#indicator {
  margin-top: 25px;
}
#sche-title {
  height: 70px;
  background-color: aqua;
}
#sche-outer {
  width: 90%;
  padding-top: 15px;
  background-color: aquamarine;
}
#cls-ls {
  margin-top: 25px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  flex: 1;
  background-color: antiquewhite;
}
.schedule {
  margin-top: 10px;
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

@media (max-width: 1000px) {
  .meddle-hide {
    display: none;
  }
  .box {
    box-shadow: 0;
  }
  #cls-ls {
    height: 100%;
    margin-bottom: 0px;
  }
  .cls-width {
    width: 100%;
    height: 100%;
  }
}
</style>
