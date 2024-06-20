<template>
    <div>
        <div v-for="destination in destinations" :key="destination.imdbID" class="movie">
            <h2>{{ destination.Title }}</h2>
            <p>{{ destination.Year }}</p>
            <img :src=" destination.Images[0] " alt="">
     
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

        console.log(this.destinations)
    },
}
</script>