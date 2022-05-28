<template>
    <div class="KompetenceBox">
        <h2>{{header}}</h2>
        <ul v-if="kompetencer[0]" class="Kompetence">
            <li v-for="kompetence in kompetencer">{{kompetence.name}}</li>
        </ul>
        <p v-else>
            fetcher data
        </p>
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
        padding: 1rem;
        border-radius: 5%;
        flex-direction: column;
        min-width: 13rem;
        -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
        -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
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
    @media screen and (max-width: 1130px) {
        .KompetenceBox{
            margin-bottom: 3rem;
    }
}
</style>