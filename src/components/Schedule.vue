<template>
  <div class="flrow">
    <div class="cnt-time"><span>2020</span></div>
    <div class="cnt-sche">
       <div class="box-sche-cover">
           cover
       </div>
        <div class="box-sche-detail">
           detail
       </div>
       <div class="box-sche-desp">
           desp
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule"
};
</script>

<style lang="scss" scoped>
.cnt-time{
   width: 26%;
   background-color: red;
}
.cnt-sche{
  display: grid;
  flex: 1;
  grid-gap: 2px;
  grid-template-rows: 60% 40%;
  grid-template-columns: 30% 70%;
  
}
.cnt-sche > div {
  background-color: aqua;
}
.box-sche-cover{
  
   grid-column-start: 1;
   grid-column-end: 2;
}
.box-sche-detail{
   
  grid-column-start: 2;
   grid-column-end: 3; 
} 
.box-sche-desp{
   
    grid-column-start: 1;
   grid-column-end: 3; 
}
</style>
