<template>
    <div class="container">

        <h1 class="text-xl font-bold text-center">Catalog</h1>

        <div class="wrapper">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
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