<template>
    <section class="kompetencer">
        <section class="kompetencer__header">
            <h1>Kompetencer</h1>
            <h2>Disse er nogen teknologier jeg har arbejdet med</h2>

            
        </section>
        <div class="kompetenceBoxContainer">
            <KompetenceBox header="Front End" :kompetencer="['HTML/CSS', 'Javascript', 'Node.JS', 'Vue.JS']"/>
            <KompetenceBox header="Back End" :kompetencer="['Java (Spring)', 'C# (Asp.net 6 Core)', 'Node.JS (Express)', 'SQL', 'Firebase']"/>
            <KompetenceBox header="Andet" :kompetencer="['Projekt Dokumentation (FX UML)', 'Arbejdet Agilt', 'Machine Learning (Python)', 'Docker', 'Postman / Insomnia']"/>
        </div>
    </section>
</template>

<script>
import KompetenceBox from './Kompetencer/KompetenceBox.vue';

export default {
    name: "Kompetencer",
    components:{
        KompetenceBox,
    }
}
</script>

<style scoped>
    h1{
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .kompetencer__header{
        text-align: center;
    }
    .kompetenceBoxContainer{
        display: flex;
        justify-content: space-around;
    }
</style>