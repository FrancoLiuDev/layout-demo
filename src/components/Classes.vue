<template>
  <div class="flcol fl-cet-items  cls-content flcol">
    <Indicator id="indicator" class="cls-width meddle-hide"></Indicator>
    <div
      id="cls-ls"
      class="cls-width flcol fl-cet-items box main-border bg-front"
    >
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
  // background-color: $background-color;
}
.cls-width {
  width: 95%;
}
#indicator {
  margin-top: 25px;
}
#sche-title {
  height: 70px;
}
#sche-outer {
  width: 90%;
  padding-top: 15px;
  margin-bottom: 25px;
}
#cls-ls {
  margin-top: 25px;
  padding-bottom: 15px;
  margin-bottom: 25px;
  flex: 1;
}
.schedule {
  margin-top: 10px;
}

.box {
  position: relative;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.box:before,
.box:after {
  content: "";
  width: 5%;
  background: #000;
  z-index: -1;
  position: absolute;
  top: -3px;
  bottom: 15px;
  left: 7px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
  transform: rotate(-3deg);
}
.box:after {
  right: 60px;
  left: auto;
  transform: rotate(3deg);
}

@media (max-width: 1000px) {
  .box {
    position: relative;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  }
  .box:before,
  .box:after {
    content: "";
    width: 0px;
    background: #000;

    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.5);
    transform: rotate(0deg);
  }
  .box:after {
    right: 60px;
    left: auto;
    transform: rotate(0deg);
  }
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
  #sche-outer {
    width: 100%;
  }
}
</style>
