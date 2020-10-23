<template>
  <div id="app" class="flcol">
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
  width: 100%;
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
}
</style>
