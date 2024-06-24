<template>
    <div>
        <div class="nav">
            <div id="logo">
                <router-link to="/"><img src="/images/logo.png" alt="Netflix-Logo"></router-link>
            </div>
            <router-link  to="/home">Home</router-link>
            <router-link   to="/login">Sign In</router-link>
            <router-link    to="/login"><button class="logout-btn"  @click="logout" >Logout</button></router-link>
        </div>
        <div class="home-content">
                <h1>Welcome, {{ username }} </h1>
        </div>
        <MovieCard />


    </div>

    
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
   
    components : {MovieCard},
    data(){
        return {
            username: ""
        }
    },
    created() {
        const storedUsername =  localStorage.getItem('username');
        if(storedUsername) {
            this.username =   storedUsername
        }
    },

    methods: {
        logout() {
            localStorage.removeItem('username');
            this.$router.push({ name: 'LoginPage' });
        }
   
    }
}
</script>

<style>
.nav {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    padding: 30px;
    background: #000;
    display: flex;
    align-items: center;
    height: 90px;
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


.home-content h1 {
    padding: 30px;
    font-size: 3rem;
}
</style>