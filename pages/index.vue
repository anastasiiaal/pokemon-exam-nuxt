<template>
    <div class="container">

        <h1>Homepage</h1>

        <div class="wrapper">
            <PokemonCard v-for="pokemon in pokemons" />
        </div>
    
    </div>
</template>

<script setup>
import PokemonCard from '~/components/PokemonCard.vue';


    const { getPokemons } = useApi();
    const pokemons = ref([]);

    async function getAllPokemons (param) {
        pokemons.value = await getPokemons(param);
    }

    onMounted(() => {
            getAllPokemons()
        }
    )

</script>

<style scoped>

</style>