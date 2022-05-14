<template>

    <header>
        <div class="wrapper">
            <h2>{{name}}</h2>
        </div>
    </header>
   
</template>

<script>
export default {
    name: 'header',
    props: {
        name: String,
    }
}
</script>

<style scoped>
    header {
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
    }
    header > .wrapper {
        display: flex;
        justify-content: space-between;
    }
    header > .wrapper > nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15rem;
    }
</style>