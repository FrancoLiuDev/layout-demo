<template>
  <div class="sche-outer ">
    <div class="cnt-time  relate">
      <span class="relate time-span-wapper">
        <span class="she-time">2020/08/24</span>
        <span>15:33~16:30</span>
      </span>
    </div>
    <div class="cnt-sche-outer">
      <GridWapper>
        <template slot="cover">
          <div class="box-sche-cover">
            <!-- <img src="https://cw1.tw/CW/opinion/images/common/old/shutterstock_272473859.jpg"> -->
            
            <!-- <ximage class="img-ful"></ximage> -->
          </div>
        </template>
        <template slot="infomation">
          <div class="box-sche-detail flcol">
            <span class="head-title">細胞的構造及功能</span>
            <div class="head-title-2">
              {{ `科目：生物  年級：九年級  難易度：簡單` }}
            </div>
            <div class="sche-buttons flrow  fl-end-items ">
              <Button text="觀看課程"></Button>
              <Button text="進入教室"></Button>
              <Button text="問題回覆"></Button>
            </div>
          </div>
        </template>
        <template slot="commander">
          <div class="box-sche-act relate">
            <div class="abs-r-t">
              <ximage class="icon-m"></ximage>
            </div>
            <div class="abs-r-t abs-r-t-space">
              <div class="edit flcol main-border">
                <span>編輯</span>
                <span>刪除</span>
              </div>
            </div>
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
import Button from "./Button";

export default {
  name: "Schedule",
  components: { ximage, VClamp, GridWapper, Button },
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
}
.head-title-2 {
  height: 40px;
}
.box-sche-cover{
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("https://cw1.tw/CW/opinion/images/common/old/shutterstock_272473859.jpg");
}
.sche-buttons {
  max-width: 380px;
  flex: 1;
}
.edit {
  width: 48px;
  height: 65px;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  span {
    padding-left: 9px;
    padding-top: 6px;
    flex: 1;
  }
}
.box-sche-detail {
  // min-width: 350px;
}
.edit :first-child {
  color: blue;
  background-color: #00000011;
}

.sche-buttons > div {
  height: 30px;
  flex: 1;
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
  box-sizing: content-box;
  align-items: center;
  margin: 0px;
  padding-top: 20px;
  width: 20%;
}
.sp-des {
  font-size: 1vh;
}
.cnt-sche-outer {
  padding: 10px;
  flex: 1;
}

.time-span-wapper {
  display: flex;
  flex-direction: column;
}
@media (max-width: 700px) {
  .sche-outer {
    display: flex;
    flex-direction: column;
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
@media (max-width: 700px) {
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
