<template>
  <div class="home-page">
      <BaseNavigation/>
      <header>
        <div class="search">
          <input type="text"
          v-model="searchString"
          @keyup.enter="handleSearch"
          placeholder="Search..."> <i class="fas fa-search"></i>
        </div>
      </header>
    <div class="main">
      <section v-for="({movies, genre}, index) in data"
               :key="index">
        <h1>{{genre.toUpperCase()}}</h1>
        <swiper class="swiper"
                :options="swiperOptions">
          <swiper-slide v-for="(movie, index)  in movies"
                        :key="movie.name">
            <router-link :to="`/movie/${movie._id}`">
              <img :src="movie.image.medium" alt="">
            </router-link>
            <p>{{movie.name}}</p>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  data () {
    return {
      searchString: undefined,
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
        }
    }
  },
  created () {
    this.$store.dispatch('getMovies')
  },

  computed: {
    data () {
      return this.$store.state.movies
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    handleSearch () {
      this.$store.dispatch('handle_search', this.searchString)
    }
  }
}
</script>

<style lang="scss">
.home-page_ {
  .search {
    text-align: center;
    position: absolute;
    top: 60px;
    right: 60px;
    input {
      padding: 6px 12px;
      border-radius: 1em;
      width: 250px;
      background-color: rgba(248, 246, 246, 0.99);
    }
  }
  .main {
    h1 {
      border-bottom: 2px solid gray;
      letter-spacing: 3px;
      font-weight: 500;
      font-size: 30px;
      padding: 4px 8px;
    }
  }

}
.home-page {
  @media only screen and (min-width: 0) {
    header {
      text-align: center;
      .search {
        input {
          border-radius: 4px;
          padding: 6px 12px;
          width: 200px;
          background-color: rgba(111,111,111,0.37);
          border: none;
          outline: none;
          &:focus {
            border: none;
          }
        }
        .fas  {
          height: 25px;
          color: #d9d9d9;
          transform: translateX(-150%);

        }
      }
    }
    padding: 16px;
    h1 {
      color: rgba(255, 255, 255, 0.84);
      border-bottom: 2px solid rgba(211, 211, 211, 0.38);
    }

  }
  @media only screen and (min-width: 500px) {
    header{
      transform: translateY(-200%);
    }
  }
  @media only screen and (min-width: 768px) {

  }
  @media only screen and (min-width: 1024px) {
    padding: 24px;
    margin: 0 auto;
    max-width: 900px;
  }
  @media only screen and (min-width: 1440px) {}
}


</style>
