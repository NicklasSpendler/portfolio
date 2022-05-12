<template>
    <header>
        <h2>{{name}}</h2>
        <nav>
            <li>Home</li>
            <li>CV</li>
            <li>Projects</li>
        </nav>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header > nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15rem;
    }
</style>