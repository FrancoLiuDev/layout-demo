<template>
  <div class="flcol fl-cet-items  -cet relate">
    <div id="nav-outer" class="flrow flrow-cet">
       <div class="nav-item">a</div>
       <div class="nav-item">a</div>
       <div class="nav-item">a</div>
       <div class="nav-item">a</div>
    </div>
    <div id="meber-outer" class="abs-r-end ful-h flrow fl-cet-items ">
       <div class="sys-message">
         <ximage></ximage>
       </div>
       <div class="sys-member flrow fl-reverse">
         <span>cs</span>
          <ximage></ximage>
       </div>
    </div>
  </div>
</template>

<script>
import ximage from "./image";
export default {
  name: "",
   components: { ximage }
};
</script>

<style lang="scss" scoped>
#meber-outer {
  margin-right: 20px;
  width: 150px;
  background-color: red;
}
#nav-outer {
  min-width: 300px;
  width: 40%;
  flex: 1;
  background-color: red;
}
.abs-r-end {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
}
.nav-item{
  padding: 3px;
  margin: 3px;
  width: 65px;
  background-color: aliceblue;
}
.sys-member{
  flex: 1;
  background-color: aliceblue;
}
</style>
