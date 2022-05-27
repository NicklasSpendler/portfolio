<template>
    <div class="projekt__box">
        <div class="projekt__image">
            <img src="../../assets/portfolio__projekt.jpg" alt="">
        </div>
        <div class="projekt__desc">
            <div class="projekt__wrapper">
                <h1 class="desc__header">Portfolio </h1>
                <hr style="margin-top: 0">
                <p style="white-space: pre-wrap;">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projekt',
    data(){
        return {
            text: 'Dette projekt omhandler udarbejdelsen af portfolio. \n\n Portfolien er udviklet ved hjælp af Vue.js som frontned. Opbygningen er modulær, så jeg kan tilgå data igennem en API.  \n\n Planen er at lave et CMS system, hvori jeg kan slette, tilføje og redigere i kompetencer, CV og projekter vist på frontend. \n\n For at tilgå API kan man finde den oppe NAV til højre.'
        }
    }
}
</script>

<style scoped>

.projekt__wrapper{
    margin: 0 11%;
}
.projekt__box{
    display: flex;
    border: solid white 1px;
}
.projekt__image{
    width: 50%;
}

.projekt__image > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.projekt__desc{
    width: 100%;
}
.desc__header{
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.desc__header > .github_icon{
    justify-self: flex-end;
}

</style>