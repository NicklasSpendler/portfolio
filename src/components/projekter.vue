<template>
    <h1 class="componentHeader">
        Projekter
    </h1>
    
    <ul v-for="projekt in projekter">
        <projekt :header=projekt.name :description="projekt.description" />
    </ul>
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

</style>