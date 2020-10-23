<template>
  <div id="app" class="flcol ful-w">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}

.flcol {
  display: flex;
  flex-direction: column;
}
.flcol-cet {
  align-items: center;
}
.ful-w {
  width: 100%;
}
.ful-h {
  height: 100%;
}
</style>
