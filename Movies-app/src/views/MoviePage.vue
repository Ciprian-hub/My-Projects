<template>
  <div class="movie-page">
    <baseNavigation/>
    <div class="movie-container">
      <div class="poster-image">
        <img :src="movie.image.original" alt="">
      </div>
      <div class="movie-description">
        <h1>{{movie.name}}</h1>
        <ul>
          <li>{{movie.language}}</li>
          <li>{{movie.runtime}}min</li>
          <li>{{movie.genres[0]}}/{{movie.genres[1]}} </li>
        </ul>
        <h3>Summary</h3>
        <p v-html="movie.summary"> {{movie.summary}}</p>
        <h3>Rating:</h3>
        <star-rating
            :rating=movie.rating
            v-bind:increment="0.1"
            v-bind:max-rating="10"
            inactive-color="#000"
            active-color="yellow"
            v-bind:star-size="20"
        />

      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating"
export default {
  name: 'Movie',
  created() {
    const id = this.$router.currentRoute.params.id
    this.$store.dispatch('getMovie', id)
  },
  components: {
    StarRating
  },
  computed: {
    movie() {
      return this.$store.state.movie
    },
  }
}
</script>

<style lang="scss">
.movie-page_ {
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background-color: #333333;
  height: 100%;
  max-width: 1200px;
  .meniu {
    margin: 0 auto;
    max-width: 1000px;
    background-color: rgba(2, 1, 1, 0.58);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    box-shadow: 1px 1px 7px;
    border-radius: 1em;
    .poster-image {
      img {
        border-radius: 1em;
       padding: 5px;
        width: 400px;
        box-shadow: 1px 1px 5px;
      }
    }
    .movie-description {
      color: white;
      padding: 20px;
      h1 {
        text-align: center;
        text-shadow: 1px 1px 1px;
        color: rgba(0, 0, 0, 0.75);
        border-bottom: 1px solid rgba(51, 51, 51, 0.25);
        color: whitesmoke;
        letter-spacing: 3px;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        li {
          background-color: rgba(51, 51, 51, 0.82);
          margin: 2px;
          padding: 4px 8px;
          border-radius: 0.5em;
          color: white;
        }
      }
      p {
        color: rgba(0, 0, 0, 0.90);
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: rgba(245, 245, 245, 0.81);
      }
    }
  }
}
/*@media (max-width: 630px) {
  .meniu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}*/
.movie-page {
  box-sizing: border-box;
  @media only screen and (min-width: 0) {
    padding: 16px;
    .movie-container{
      min-width: 300px;
      background-color: rgba(2, 1, 1, 0.58);
      box-shadow: 1px 1px 10px  3px rgba(255, 255, 255, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      .poster-image{
        margin-top: 16px;
        img {
          width: 290px;
          box-shadow: 1px 1px 10px  3px rgba(255, 255, 255, 0.15);
        }
      }
      .movie-description {
        color: white;
        padding: 16px;
        h1 {
          text-align: center;
          border-bottom: 1px solid rgba(210, 207, 207, 0.68);
          color: rgba(245, 245, 245, 0.76);
          letter-spacing: 3px;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-evenly;
          padding-left: 0;
          li {
            background-color: rgba(51, 51, 51, 0.82);
            margin: 2px;
            padding: 4px 8px;
            border-radius: 0.5em;
            color: white;
          }
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          color: rgba(245, 245, 245, 0.76);
        }
      }
      }
  }
  @media only screen and (min-width: 460px) {
    .movie-container{
      border: 1px solid black;
      display: flex;
      .poster-image{
        img {
          width: 350px;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .movie-container {
      display: flex;
      flex-direction: row;
      padding: 16px;
      height: 100%;
      .poster-image {
        img {
          width: 400px;
        }
      }
      .movie-description {
        padding: 16px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 16px;
    margin: 0 auto;
    max-width: 1000px;
  }
  @media only screen and (min-width: 1440px) {}
}

</style>
