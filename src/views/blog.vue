<template>

  <div class="hello">


    <!--boostrap card to show information and a loop "for" to show every movies-->
    <div v-for="film in film" :key="film.imbID">

      <b-card :title="film.Title" :img-src="film.Poster" img-alt="Image" img-top tag="article" 
        style="max-width: 20rem;" class="mb-2">
        <b-card-text>
          {{film.Title}}
        </b-card-text>
        <b-button href="#" variant="primary">stay here</b-button>
      </b-card>
    </div>


  </div>

</template>

<script>
  const axios = require('axios').default;
  export default {
    name: 'blog',
    props: {

    },
    mounted() {
      axios
        .get('http://www.omdbapi.com/?s=star&plot=full&apikey=fb4ad114')
        .then(response => (this.film = response.data.Search))
      //http://www.omdbapi.com/?t=batman&y=2020&apikey=fb4ad114 pour voir toutes les infos du film batman
      //http://www.omdbapi.com/?s=batman&y=2020&apikey=fb4ad114 pour voir les principales infos du film batman
      //http://www.omdbapi.com/?s=film&y=2020&apikey=fb4ad114 pour voir tous les films
    },
    data() {
      return {
        film: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1%;

  }
  .hello div{
    margin: auto;
  }
.mb-2{
      
    border-radius: 30px;
}
img{
  border-radius:30px
}
</style>