<template>
    <section class="kompetencer">
        <section class="kompetencer__header">
            <h1 class="componentHeader">Kompetencer</h1>
            <h2>Dette er eksempler på teknologier jeg har arbejdet med</h2>

            
        </section>
        
        <div v-if="kompetencer[0]" class="kompetenceBoxContainer">
            <KompetenceBox v-for="kompetence in kompetencer" :key="kompetence.id" :header="kompetence.name" :kategorid="kompetence.id" :githubLink="kompetence.githubLink"/>
        </div>
        <div v-else>
            <p style="text-align: center">fetcher data. Vent venligst</p>
        </div>



    </section>
</template>

<script>
import KompetenceBox from './Kompetencer/KompetenceBox.vue';

export default {
    name: "Kompetencer",
    components:{
        KompetenceBox,
    },
    data() {
        return {
            kompetencer: []
        }
    },
    mounted() {
        fetch("https://portfolioapinicklas.azurewebsites.net/api/CompetenceCategory")
        .then(res => res.json())
        .then(data => this.kompetencer = data)
        .catch(err => console.log(err.message) );
    }
}

</script>

<style scoped>
    h2{
        margin-bottom: 2rem;
    }
    .kompetencer__header{
        text-align: center;
    }
    .kompetenceBoxContainer{
        display: flex;
        justify-content: space-around;
    }

@media screen and (max-width: 1130px) {
        .kompetenceBoxContainer{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
}
</style>