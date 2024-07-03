<template>
    <div class="home-page">
        <div class="nav">
            <div id="logo">
                <router-link to="/"><img src="/images/logo.png" alt="Netflix-Logo"></router-link>
            </div>
            <router-link  to="/home">Home</router-link>
            <router-link   to="/login">Sign In</router-link>
            <input type="text" v-model="searchQuery" placeholder="Search movie...">
            <router-link    to="/login"><button   @click="logout" >Logout</button></router-link>
        </div>
        <div class="home-content">
                <h1>Welcome, {{ username }} </h1>
        </div>
        <div class="movie-list">
                <router-link
                    v-for="(destination, index) in filteredDestination" 
                    :key="destination.imdbID" class="movie-card"
                    :to="{name: 'MovieCardItem', params: {imdbID: destination.imdbID}}"
                    >
                    <div class="card">
                        <img :src="destination.Images[0]" alt="Movie Poster">
                        <div class="card-body">
                        <h4>Name: {{ destination.Title }}</h4>
                        <p>{{ destination.Year }}</p>
                        <p>Rating: {{ destination.Rated }}</p>        
                        </div>
                    </div>
                    <!-- Break every 4 items -->
                    <br v-if="(index + 1) % 4 === 0">
                </router-link>
        </div>

    </div>

    
</template>

<script>

export default {

    data(){
        return {
            username: "",
            destinations: [],
            searchQuery: ""
        }
    },
    created() {
        this.username = localStorage.getItem('username');
         console.log(this.username)
  },
    async mounted() {
        const response = await fetch(`https://calf-live-bucket.s3.ap-south-1.amazonaws.com/Film.JSON`)
        console.log(response)
        var data = await response.json()
        this.destinations = data.movies

    },
    computed: {
        filteredDestination() {
            if(!this.searchQuery.trim()){
                return this.destinations;
            } else {
                const searchItem = this.searchQuery.toLowerCase();
                return this.destinations.filter(destination => destination.Title.toLowerCase().includes(searchItem));

            }
        }
    },

    methods: {
        logout() {
            // localStorage.removeItem('username');
            this.$router.push({ name: 'LoginPage' });
        }
   
    }
}
</script>

<style scoped>

.home-page {
    width: 100%;
    height: 100%;
    background-color: black;
}
.nav {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    padding: 30px;
    display: flex;
    align-items: center;
    height: 30px;
    
    /* z-index: 2; */
}

.nav > * {
    margin-right: 40px; /* Add margin between items */
    color:#e50914;
    transition: 0.2 ease color;
    font-size: 1.3rem;
    text-decoration: none;
    opacity: 0.9;
}

.nav *.router-link-active,
.nav *:hover {
  opacity: 1;
}

#logo {
    width: 140px;
}

#logo img{
    max-width: 100%;
    height: auto;
}

.nav button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: white;
    background-color: #e50914;
    padding: 10px 20px; 
    border: none; 
    border-radius: 5px; 
}


.home-content h1{
    padding: 30px;
    font-size: 3rem;
    color: #ccc;
  

}

input[type="text"] {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: black;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
}

.movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Adjust card width */
    gap: 20px; /* Gap between cards */
    padding: 10px;


  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px; */
  
}

.movie-card {
  /* width: calc(25% - 20px); 
   */
   width: 100%;
  margin-bottom: 20px;
  transition: transform 0.2s ease;
}

.movie-card:hover {
    transform: scale(1.05);
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  
}

.card img {
  width: 100%;
  border-radius: 8px 8px 0 0; /* Rounded corners on top */
  height: 250px;
  object-fit: cover;
}

.card-body {
  padding: 4px;
  color: white;
}
.movie-list a, .movie-list p {
    text-decoration: none;
}

</style>