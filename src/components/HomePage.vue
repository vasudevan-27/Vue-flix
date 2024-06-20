<template>
    <div>
        <div id="nav">
            <router-link id="logo" to="/"><img src="/images/logo.png" alt="Netflix-Logo"></router-link>
            <router-link  to="/home">Home</router-link>
            <router-link to="/login">Sign In</router-link>
            <router-link to="/login"><button class="logout-btn" >Logout</button></router-link>
        </div>
        <div class="home-content">
                <h1>Welcome, {{ username }}</h1>
        </div>
        <MovieCard />


    </div>

    
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
    components : {MovieCard},
    props : {
        username: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log(this.username)
    }
}

</script>