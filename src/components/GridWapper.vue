<template>
  <div>
    <div class="grid-ful cnt-sche main-border">
      <slot name="cover"></slot>
      <slot name="infomation"></slot>
      <slot name="commander"></slot>
      <slot name="description"></slot>
    </div>
    <!-- <div class="grid-d cnt-sche main-border">
      <slot name="cover"></slot>
      <slot name="infomation"></slot>

      <slot name="commander"></slot>
      <slot name="description"></slot>
    </div> -->
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
.cnt-sche > div {
  border-style: dotted;
}
.cnt-sche {
  padding: 10px;
  display: grid;
  flex: 1;
  grid-gap: 2px;
  grid-template-rows: 200px auto;
  grid-template-columns: 200px auto 15%;
}
.cnt-sche > div {
  padding: 5px;
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
.grid-d {
  display: none;
}

@media (max-width: 1300px) {
  .cnt-sche {
    grid-column-gap: 5px;
    grid-template-rows: 140px 130px;
    grid-template-columns: 200px auto 10%;
  }

  .box-sche-cover {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  .box-sche-detail {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .box-sche-act {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .box-sche-desp {
    overflow-wrap: anywhere;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}

@media (max-width: 700px) {
  .cnt-sche {
    grid-column-gap: 5px;
    grid-template-rows: 300px 100px 100px;
    grid-template-columns: 300px auto;
  }
  .box-sche-cover {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .box-sche-detail {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .box-sche-desp {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .box-sche-act {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}

@media (max-width: 340px) {
  .cnt-sche {
    grid-column-gap: 5px;
    grid-template-rows: 250px 100px auto;
    grid-template-columns: 250px auto;
  }
}
</style>
