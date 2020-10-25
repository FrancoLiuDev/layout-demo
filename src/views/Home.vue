<template>
  <div class="main-content flcol fl-cet-items ">
    <div id="home-center" class="home-ful-center flcol">
      <Banner id="banner"></Banner>
      <div id="class-outer">
        <Menu id="class-menu" class="meddle-hide"> </Menu>
        <Classes id="class-inner " class="bg-back"> </Classes>
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
}
#home-center {
  flex: 1;
  width: 85%;
  max-width: 1250px;
}
#banner {
  height: 50px;
}
#class-outer {
  display: flex;
  flex: 1;
}
#class-menu {
  min-height: 100%;
  width: 250px;
  background-color: $background-color;
}
#class-inner {
  flex: 1;
}
#infomation {
  height: 50px;
}

@media (max-width: 1000px) {
  .meddle-hide {
    display: none;
  }
  #home-center {
    width: 100%;
    max-width: 1800px;
  }
}
</style>
