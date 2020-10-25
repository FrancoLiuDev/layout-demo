<template>
  <div class="sche-outer">
    <div class="cnt-time  relate">
      <span class="relate time-span-wapper">
        <span class="she-time">2020/08/24</span>
        <span>15:33~16:30</span>
      </span>
    </div>
    <div v-if="true" class="cnt-sche-outer">
      <GridWapper>
        <template slot="cover">
          <div class="box-sche-cover">
            <ximage class="img-ful"></ximage>
          </div>
        </template>
        <template slot="infomation">
          <div class="box-sche-detail flcol">
            <span class="head-title">細胞的構造及功能</span>
            <div>{{ `科目：生物  年級：九年級  難易度：簡單` }}</div>
            <div class="sche-buttons">buttons</div>
          </div>
        </template>
        <template slot="commander">
          <div class="box-sche-act">
            act
          </div>
        </template>
        <template slot="description">
          <div class="box-sche-desp" ref="description">
            <v-clamp autoresize :max-lines="lines" class="font-normal">
              {{ text }}</v-clamp
            >
          </div>
        </template>
      </GridWapper>
    </div>
  </div>
</template>

<script>
import ximage from "./image";
import VClamp from "vue-clamp";
import GridWapper from "./GridWapper";
export default {
  name: "Schedule",
  components: { ximage, VClamp, GridWapper },
  data: () => ({
    start: false,
    lines: 0,
    text:
      "生物都需要能量，才能維持生命現象。細胞是生物體構造及功能的基本單位，它具有樣的構造來維持定，代謝，生長，繁殖等功能呢?生如如何生物都需要能量，才能維持生命現象。細胞是生物體構造及功能的基本單位，它具有樣的構造來維持定，代謝，生長，繁殖等功能呢?生如如何"
  }),
  mounted() {
    window.addEventListener("resize", this.onResize);

    var self = this;
    setTimeout(function() {
      self.doLayout();
    }, 50);
  },
  methods: {
    doLayout() {
      if (document.body.clientWidth < 460) {
        this.lines = 2;
      } else if (document.body.clientWidth < 1120) {
        this.lines = 4;
      }
      console.log(this.lines);
    },
    onResize() {
      this.doLayout();
    }
  }
};
</script>

<style lang="scss" scoped>
.sche-outer {
  display: flex;
  flex-direction: row;
  min-height: 250px;
}

.she-time::before {
  border-radius: 30px;
  width: 8px;
  height: 8px;
  left: -20px;
  top: 10px;
  position: absolute;
  content: "";
  color: red;
  background-color: red;
}
.cnt-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  width: 20%;
}
.sp-des {
  font-size: 1vh;
}
.cnt-sche-outer {
  padding: 10px;
  flex: 1;
}
// .cnt-sche {
//   max-width: 100%;
//   padding: 10px;
//   display: grid;
//   flex: 1;
//   grid-gap: 2px;
//   // grid-template-rows: 57% 43%;
//   grid-template-rows: 200px auto;
//   grid-template-columns: 200px auto 15%;

//   // grid-template-columns: 30% 55% 15%;
// }
// .cnt-sche > div {
//   padding: 5px;
// }
// .sche-buttons {
//   flex: 1;
// }

// .box-sche-cover {
//   grid-column-start: 1;
//   grid-column-end: 2;
// }
// .box-sche-detail {
//   grid-column-start: 2;
//   grid-column-end: 3;
// }
// .box-sche-act {
//   grid-column-start: 3;
//   grid-column-end: 4;
// }
// .box-sche-desp {
//   max-width: 100%;
//   overflow-wrap: anywhere;
//   grid-column-start: 1;
//   grid-column-end: 4;
// }
.time-span-wapper {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1300px) {
  .sche-outer {
    display: flex;
    flex-direction: column;
    min-height: 420px;
  }
  .time-span-wapper {
    margin: 10px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
  }
  .she-time::before {
    left: -15px;
    top: 3px;
    color: red;
    background-color: red;
  }
}
@media (max-width: 1000px) {
  .cnt-time {
    align-items: flex-start;
    width: 100%;
  }
}
@media (max-width: 340px) {
  .cnt-sche-outer {
    padding: 0px;
  }
}
</style>
