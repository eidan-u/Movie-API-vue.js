<template>
  <div class="hello">
<div class="contenant">
  <br>
  <span style ="color:red">{{msg}}</span>
 <img src="./../assets/unnamed.jpg">
  </div>


  </div>
</template>

<script>
export default {
  name: 'film',
  data(){
 return {
        msg: "Page en attente de creation, veuillez prendre un ticket et vous asseoir en attendant que l'on vous appelle Merci Bien :)"
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  display: block;
  margin: auto
}

</style>
