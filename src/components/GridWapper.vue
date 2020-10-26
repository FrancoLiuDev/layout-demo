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
  // border-style: dotted;
}
.cnt-sche {
  padding: 10px;
  display: grid;
  flex: 1;
  grid-gap: 2px;
  grid-template-rows: 130px auto;
  grid-template-columns: 190px minmax(340px, 1fr) auto;
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

// @media (max-width: 1000px) {
//   .cnt-sche {
//     grid-column-gap: 5px;
//     grid-template-rows: 130px 100px;
//     grid-template-columns: 250px minmax(320px, auto) 10%;
//   }

//   .box-sche-cover {
//     grid-column-start: 1;
//     grid-column-end: 2;
//     grid-row-start: 1;
//     grid-row-end: 4;
//   }
//   .box-sche-detail {
//     grid-column-start: 2;
//     grid-column-end: 3;
//     grid-row-start: 1;
//     grid-row-end: 2;
//   }
//   .box-sche-act {
//     grid-column-start: 3;
//     grid-column-end: 4;
//     grid-row-start: 1;
//     grid-row-end: 2;
//   }
//   .box-sche-desp {
//     overflow-wrap: anywhere;
//     grid-column-start: 2;
//     grid-column-end: 4;
//   }
// }


@media (max-width: 580px) {
  .cnt-sche {
    grid-column-gap: 5px;
    grid-template-rows: 250px 100px auto;
    grid-template-columns: 330px auto;
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
    grid-template-rows: 180px 100px auto;
    grid-template-columns: 250px auto;
  }
}
</style>
