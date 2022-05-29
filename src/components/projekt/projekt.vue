<template>
    <div class="projekt__box">
        <div class="projekt__image">
            <img :src=imagePath alt="">
        </div>
        <div class="projekt__desc">
            <div class="github__container">
                <a :href=githubLink>
                    <img src="../../assets/githubLogo.png" alt="">
                </a>
            </div>
            <div class="projekt__wrapper">
                <h1 class="desc__header">{{header}} </h1>
                <hr style="margin-top: 0">
                <p style="white-space: pre-line;">{{newText}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projekt',
    props: {
        header: String,
        description: String,
        imagePath: String,
        githubLink: String
    },
    data(){
        return {
            newText: String
        }
    }, 
    mounted() {   

        //Hurtig løsning, muligt at bruge split i stedet
        var test = this.description.toString();

        this.newText = test.replace(/\\n/g , "\n\n");
    }
}
</script>

<style scoped>

.projekt__wrapper{
    margin: 0 11%;
}
.projekt__box{
    display: flex;
    margin-bottom: 1rem;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.37);
    position: relative;
}
.projekt__image{
    width: 40%;
}

.projekt__image > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
}
.projekt__desc{
    width: 60%;
    font-size: 1.2rem;
}
.desc__header{
    text-align: center;
    margin: 0;
    padding: .8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.github__container{
    position: absolute;
    right: 10px;
    top: 10px;
}

.github__container > a > img{
    height: 50px;
}

@media screen and (max-width: 1130px) {
    .desc__header{
        font-size: 1.5rem;
    }
    .projekt__desc{
        font-size: 1rem;
        width: 80%;
    }
    .projekt__image{
        width: 20%;
    }

    .github__container{
        position: absolute;
        left: 10px;
        top: 10px;
    }

    .github__container > a > img{
        height: 30px;
    }
}

</style>