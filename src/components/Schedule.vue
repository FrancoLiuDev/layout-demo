<template>
  <div class="flrow sche-outer">
    <div class="cnt-time"><span>2020</span></div>
    <div class="cnt-sche">
      <div class="box-sche-cover">
        <ximage class="img-ful"></ximage>
      </div>
      <div class="box-sche-detail flcol">
        <div>Name</div>
        <div>catalog</div>
        <div class="sche-buttons">buttons</div>
      </div>
      <div class="box-sche-act">
        act
      </div>
      <div class="box-sche-desp" ref="description">
        <v-clamp autoresize :max-lines="lines"> gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareggregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg
          gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg
          gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg</v-clamp>
        <!-- <div class="sp-des" :v-line-clamp="lines"  >
          gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareggregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg
          gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg
          gregrewgrewgregergefgheagbaegergreageargreagraegarcscscscscscegraegaregaregaregaregaregregaergreagreagareg
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ximage from "./image";
import VClamp from 'vue-clamp'
export default {
  name: "Schedule",
  components: { ximage, VClamp },
  data: () => ({
    start: false,
    lines: 0,
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
     
      if (document.body.clientWidth < 460)
      {
         
          this.lines = 2
      }else{
          this.lines = 3
      }
      console.log(this.lines)
    },
    onResize() {
      this.doLayout();
    }
  }
};
</script>

<style lang="scss" scoped>
.sche-outer {
  min-height: 250px;
}
.cnt-time {
  margin: 0px;
  padding: 0px;
  width: 20%;
  background-color: red;
}
.sp-des {
  font-size: 1vh;
  background-color: aquamarine;
}
.cnt-sche {
  max-width: 100%;
  padding: 10px;
  display: grid;
  flex: 1;
  grid-gap: 2px;
  grid-template-rows: 57% 43%;
  grid-template-columns: 30% 55% 15%;
}
.cnt-sche > div {
  padding: 5px;
  background-color: aqua;
}
.sche-buttons {
  flex: 1;
  background-color: antiquewhite;
}

.box-sche-cover {
  grid-column-start: 1;
  grid-column-end: 2;
}
.box-sche-detail {
  grid-column-start: 2;
  grid-column-end: 3;
}
.box-sche-act {
  grid-column-start: 3;
  grid-column-end: 4;
}
.box-sche-desp {
  max-width: 100%;
  overflow-wrap: anywhere;
  grid-column-start: 1;
  grid-column-end: 4;
}

@media (max-width: 1000px) {
}

@media (max-width: 450px) {
  
  .sche-outer {
    flex-direction: column;
    min-height: 420px;
  }
  .cnt-sche {
    grid-template-rows: 50% 30% 20%;
    grid-template-columns: 40% 60%;
  }
  .box-sche-cover {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .box-sche-detail {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .box-sche-act {
    display: none;
  }
  .box-sche-desp {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
