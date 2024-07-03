<template>
    <div class="movie">
      
        <div v-if="isLoading" class="loading-message">
            Loading...
        </div>
        <div v-else>
            <div class="background-wrapper">
                <button @click="$router.back()" class="go-back">Go Back</button>
                <img v-if="movie" :src="movie.Images[2]" alt="background-image" class="background-image">
            </div>
            <div  v-if="movie" class="show-items">
                <img :src="movie.Images[2]" alt="Card-image" class="img-thumbnail">
                <div class="details">
                    <h1>Movie: {{ movie.Title }} ({{ movie.Year }})</h1><br>
                    <p>IMDB: {{ movie.imdbRating }} ⭐</p>
                    <h2>Director: {{ movie.Director }}</h2>
                    <p>Actors: {{movie.Actors}}</p><br>
                    <p>{{ movie.Plot }}</p>
                </div>
            </div>
            <div v-else>
                 Error loading data. Please try again later.
            </div>
        </div>
       
    </div>

</template>
    
<script>

export default {

    props: {
        imdbID: {type: String, required: true}
    },

    data(){
        return {
            destinations: [],
            isLoading: true,
            movie: []
        }
    },
    methods: {
        async fetchData(){
            try {
            const response = await fetch(`https://calf-live-bucket.s3.ap-south-1.amazonaws.com/Film.JSON`)
            var data = await response.json()
            this.destinations = data.movies;
            // console.log(this.destinations.find(destination => destination.imdbID === this.imdbID))
            this.movie = this.destinations.find(destination => destination.imdbID === this.imdbID)
            this.isLoading = false
            
            }catch (error) {
                console.log("Error fetching destinations:", error)
                this.isLoading = false
            }
        }
    },
    created() {
        this.fetchData()
    },
   
}
</script>


<style scoped>

.movie {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
 
}
.loading-message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5rem;
    color: #333;
}

.background-wrapper {
  position: relative;
}

.go-back {
    background-color:#e50914 ;
    color: white;
    position: absolute;
    z-index: 2;
    top:20px;
    left:20px;
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}



.background-image    {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; 
     filter: brightness(70%);
}

.movie::after {
  
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-shadow: inset 50px 70px  100px #000000, inset -50px -70px  100px #000000;
}

.show-items {
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2; 
    background-color: rgba(51, 48, 48, 0.8);
    width: 950px; 
    padding: 30px;
    display: flex;
    align-items: center;
    text-align:center ;

}
.img-thumbnail {
    width: 450px;
    height: 350px;
    margin: 20px; 
    border-radius: 10px;
}
.details{
    width: 450px;
    height: 350px;
} 





</style>