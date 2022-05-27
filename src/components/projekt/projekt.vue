<template>
    <div class="projekt__box">
        <div class="projekt__image">
            <img src="../../assets/portfolio__projekt.jpg" alt="">
        </div>
        <div class="projekt__desc">
            <div class="projekt__wrapper">
                <h1 class="desc__header">Portfolio </h1>
                <hr style="margin-top: 0">
                <p>Dette projekt er lavet til brug af portfolio. <br><br>
                det er udviklet ved hjælp af Vue.js som frontned og tanken er at det er lavet modulært så jeg kan tilgå data igennem en API. <br><br>
                det er planlagt at jeg ville lave et CMS system hvor i jeg kan slette, tilføje og redigere i kompetencer, CV og projekter vist på frontend.
                <br><br>
                For nu er det dog blot et API som man kan se <a href="https://portfolioapinicklas.azurewebsites.net/swagger/index.html">her</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projekt',
    data(){
    }
}
</script>

<style scoped>

.projekt__wrapper{
    margin: 0 11%;
}
.projekt__box{
    display: flex;
}
.projekt__image{
    width: 50%;
}

.projekt__image > img{
    width: 100%;
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