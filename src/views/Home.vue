<template>
  <div class="main-content flcol fl-cet-items ">
    <div id="home-center" class="flcol">
      <Banner id="banner"></Banner>
      <div id="class-outer">
        <Menu id="class-menu"> </Menu>
        <Classes id="class-inner"> </Classes>
      </div>
      <Information id="infomation"></Information>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Information from "../components/Information";
import Classes from "../components/Classes";

//Menu  Classes
export default {
  name: "Home",
  components: { Banner, Information, Menu, Classes }
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 1;
  background-color: red;
}
#home-center {
  flex: 1;
  width: 85%;
  max-width: 1250px;
  background-color: aqua;
}
#banner {
  height: 50px;
}
#class-outer {
  display: flex;
  flex: 1;
  background-color: green;
}
#class-menu {
  min-height: 100%;
  width: 250px;
  background-color: green;
}
#class-inner {
  flex: 1;
}
#infomation {
  height: 50px;
  background-color: orange;
}
</style>
