<template>
    <section class="CV">
        <h1 class="componentHeader">Om Mig</h1>
        <div class="aboutme">
            <div class="aboutme__text">
                <p>Som person kan jeg godt lide at sætte mig godt ind i emner og opgaver. <br><br>
                For mig er det ikke nok at have en overfladisk forståelse , jeg elsker at gå dybt i emnet og tilegne mig solide kompetencer.
                <br><br>
                jeg er heller ikke bange for at lære nyt, tværtimod så opsøger jeg nye teknologier jeg aldrig har prøvet før. <br><br>
                Denne side er et bevis for dette, den er mit første fuldendte Vue.js projekt!<br><br>
                Ud over kodning intersserer jeg mig også for elektronisk musik produktion! Og også her elsker jeg ikke bare at komponere en sang.
                Men også design lyde fra bunden!<br><br>
                I min fritid spiller jeg Computer Spil, tilbringer tid med venner og hobbyer f.eks. fitness træning og musik produktion.
                </p>
            </div>
            <div class="profilepicture">
                <img src="../assets/profilpicture2.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CV"
}
</script>

<style scoped>
    .aboutme{
        display: flex;
        justify-content: space-evenly;
    }
    .aboutme__text {
        width: 100%;
    }
    .profilepicture {
        width:  20rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .profilepicture > img {
        border-radius: 100%;
        height: 300px;
        align-self: center;
    }
</style>