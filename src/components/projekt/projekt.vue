<template>
    <div class="projekt__box">
        <div class="projekt__image">
            <img :src="imagePath" alt="">
        </div>
        <div class="projekt__desc">
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
        imagePath: String
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
.desc__header > .github_icon{
    justify-self: flex-end;
}

</style>