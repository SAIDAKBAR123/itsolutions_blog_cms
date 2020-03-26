<template>
  <div id="main_w">
     <div class="loading">
      <span >Wait!</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#main_w{
  margin: 0;
  padding: 0;
  background: #34495e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "montserrat",sans-serif;
}

.loading{
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid #0f7aac;
  position: relative;
  animation: a1 2s linear infinite;
}

.loading::before,.loading::after{
  content: '';
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: -10px;
  box-sizing: border-box;
  border-radius: 50%;
}

.loading::before{
  border-top: 10px solid #01d661;
  transform: rotate(120deg);
}

.loading::after{
  border-top: 10px solid #043f66;
  transform: rotate(240deg);
}

.loading span{
  position: absolute;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 200px;
  height: 200px;
  color: #fff;
  text-align: center;
  line-height: 200px;
  animation: a2 2s linear infinite;
}

@keyframes a1 {
  to{
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to{
    transform: rotate(-360deg);
  }
}

</style>
