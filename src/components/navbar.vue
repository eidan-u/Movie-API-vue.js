
<template>
  <div class="hello">

<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Cinematex</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      <router-link to="/" class="lien">Accueil</router-link>
      <router-link to="film" class="lien">Film</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
  
    </b-collapse>
  </b-navbar>
</div>


  
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lien{
color: white;
margin-left: 20%;
letter-spacing: 1px
}
.navbar-brand{
  letter-spacing: 1px
}
.bg-info {
    background-color: #3e34e5 !important; 
 
}
</style>
