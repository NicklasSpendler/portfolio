<template>
    <div v-if="kompetencer[0]" class="KompetenceBox">
        <h2>{{header}}</h2>
        <ul class="Kompetence">
            <li v-for="kompetence in kompetencer">{{kompetence.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"KompetenceBox",
    props: {
        header: String,
        kategorid: Number,
    },
    data(){
        return {
            kompetencer: []
        }
    },
    mounted() {
        fetch("https://portfolioapinicklas.azurewebsites.net/api/Competence/byCategoryId/category/" + this.kategorid)
        .then(res => res.json())
        .then(data => this.kompetencer = data)
        .catch(err => console.log(err.message) );
    }
}
</script>

<style scoped>
    .KompetenceBox{
        display: flex;
        border: 1px solid black;
        padding: 1rem;
        border-radius: 5%;
        flex-direction: column;
        min-width: 13rem;
        box-shadow: 1px 1px 28px 6px rgba(0,0,0,0.66);
        -webkit-box-shadow: 1px 1px 28px 6px rgba(0,0,0,0.66);
        -moz-box-shadow: 1px 1px 28px 6px rgba(0,0,0,0.66);
    }
    li{
        margin-bottom: .5rem;
        text-align: center;
        cursor: pointer;
    }
    h2{
        border-bottom: 1px solid;
        text-align: center;
    }    
</style>