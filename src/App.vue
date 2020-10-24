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
  height: 100%;
}

.flrow {
  display: flex;
  flex-direction: row;
}
.flrow-cet {
  justify-content: center;
}

.flcol {
  display: flex;
  flex-direction: column;
}

.fl-cet-items {
  align-items: center;
}
// .flcol-cet {
//   align-items: center;

// }
.ful-w {
  width: 100%;
}
.ful-h {
  height: 100%;
}
.relate {
  position: relative;
}
.fl-reverse {
  justify-content: flex-end;
}
</style>
