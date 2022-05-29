<template>
    <h1 class="componentHeader">
        Projekter
    </h1>
    
    <ul v-if="projekter[0]" v-for="projekt in projekter">
        <projekt :header=projekt.name :description="projekt.description" :imagePath="projekt.imagePath" :githubLink="projekt.githubLink"/>
    </ul>
    <div v-else>
        <p style="text-align: center;">fetcher data. Vent venligst</p>
    </div>
</template>

<script>
import projekt from './projekt/projekt.vue';

export default {
    name: 'projekter',
    components: {
        projekt
    }, data(){
        return{
            projekter: []
        }
    }, mounted(){
        fetch("https://portfolioapinicklas.azurewebsites.net/api/Projects")
        .then(res => res.json())
        .then(data => this.projekter = data)
        .catch(err => console.log(err.message) );


    }
}
</script>

<style scoped>


@media screen and (max-width: 1130px) {
    .componentHeader{
        margin: 0 0 1rem 0;
    }
}

</style>