<template>
    <div class="container">

        <h1 class="text-xl font-bold text-center">Catalog</h1>

        <div class="flex flex-wrap justify-center gap-4 mt-5">
            <button v-for="type in types" :key="type.id" class="px-4 py-2 bg-blue-200 cursor-pointer">
                {{ type.name }}
            </button>
            
        </div>

        <div class="wrapper">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>
    
    </div>
    <pre>{{ types }}</pre>
</template>

<script setup>
import PokemonCard from '~/components/PokemonCard.vue';


    const { getPokemons, getCategories } = useApi();
    const pokemons = ref([]);
    const types = ref([])

    async function getAllPokemons () {
        pokemons.value = await getPokemons();
    }

    async function getAllCategories () {
        types.value = await getCategories();
    }

    onMounted(() => {
            getAllPokemons()
            getAllCategories()
        }
    )

</script>

<style scoped>

</style>