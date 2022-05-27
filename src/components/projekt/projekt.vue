<template>
    <div class="projekt__box">
        <div class="projekt__image">
            <img src="../../assets/portfolio__projekt.jpg" alt="">
        </div>
        <div class="projekt__desc">
            <div class="projekt__wrapper">
                <h1 class="desc__header">{{header}} </h1>
                <hr style="margin-top: 0">
                <p style="white-space: pre-line;">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projekt',
    props: {
        header: String,
        description: String
    },
    data(){
        return {
        }
    }, 
    mounted() {   


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