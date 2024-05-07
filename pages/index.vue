<template>
    <div class="container">

        <h1 class="text-xl font-bold text-center">Catalog</h1>

        <h2 v-if="pendingTypes" class="w-full text-center text-xl font-bold my-5">Loading types ...</h2>
        <div v-else class="flex flex-wrap justify-center gap-4 mt-5">
            <button v-for="type in types" :key="type.id" class="px-4 py-2 bg-blue-200 cursor-pointer rounded-sm">
                {{ type.name }}
            </button>
        </div>

        <div v-if="pendingPokemons" class="wrapper">
            <h2 class="w-full text-center text-xl font-bold">Loading pokes ...</h2>
        </div>
        <div v-else class="wrapper">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>
    
    </div>
</template>

<script setup>
    import PokemonCard from '~/components/PokemonCard.vue';

    const { data: pokemons, pending: pendingPokemons } = useFetch(`https://pokebuildapi.fr/api/v1/pokemon/`);
    const { data: types, pending: pendingTypes } = useFetch(`https://pokebuildapi.fr/api/v1/types/`);
</script>

<style scoped>

</style>