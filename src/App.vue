<template>
  <div id="app" class="flcol">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 1em;
}
.head-title {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
}
div {
  font-size: 14px;
}
#app {
  height: 100%;
}

.ful-w {
  width: 100%;
}
.ful-h {
  height: 100%;
}

.img-ful {
  height: 100%;
}

.main-border {
  border: 1px #66666633 solid;
  border-radius: 5px;
  box-shadow: 1px 2px 1px 0px #55555533;
}

.test {
  background-color: red;
}
</style>
