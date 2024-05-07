<template>
    <div class="container">
        <h2 class="text-center text-xl mb-10 font-bold">My team</h2>

        <div class="wrapper-team">
            <PokemonCardTeam v-for="pokemon in team" :key="pokemon.id" :pokemon="pokemon"/>
        </div>
    </div>
</template>

<script setup>
    const team = useState('team')
</script>

<style scoped>

</style>