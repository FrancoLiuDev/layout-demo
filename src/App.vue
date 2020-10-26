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
  min-width: 320px;
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

.test {
  background-color: red;
}
</style>
