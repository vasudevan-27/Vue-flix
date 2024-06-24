<template>
    <div class="movie-list">
      <div v-for="(destination, index) in destinations" :key="destination.imdbID" class="movie-card">
        <div class="card">
          <img :src="destination.Images[0]" alt="Movie Poster">
          <div class="card-body">
            <h2>{{ destination.Title }}</h2>
            <p>{{ destination.Year }}</p>
            <p>Rating: {{ destination.Rated }}</p>
            <p>Director: {{ destination.Director }}</p>
         
          </div>
        </div>
        <!-- Break every 4 items -->
        <br v-if="(index + 1) % 4 === 0">
      </div>
    </div>
  </template>








<script>
export default {

    data(){
        return {
         
            destinations: []
        }

    },

    async created() {
        const response = await fetch(`https://calf-live-bucket.s3.ap-south-1.amazonaws.com/Film.JSON`)
        console.log(response)
        var data = await response.json()
        this.destinations = data.movies

    },
}
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 20px;
}

.movie-card {
  width: calc(25% - 20px); /* Adjust card width based on desired layout */
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}

.card img {
  width: 100%;
  border-radius: 8px 8px 0 0; /* Rounded corners on top */
  height: 250px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}
</style>