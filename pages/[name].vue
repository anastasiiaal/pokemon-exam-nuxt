<template>
    <div class="container flex gap-8">
        <div v-if="pending">
            <h3>Loading ...</h3>
        </div>
        <div v-else href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-f  dark:border-gray-700 dark:bg-gray-800 mx-auto">
            <img class="object-cover w-full rounded-t-lg h-[400px] md:w-[400px] md:rounded-none md:rounded-s-lg" :src="data.image" :alt="data.name">
            <div class="flex flex-col justify-between p-4 leading-normal w-96">
                <div class="flex items-center gap-2">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.name }}</h5>
                    <img v-for="type in data.apiTypes" class="object-cover rounded-t-lg h-8 w-8 md:rounded-none md:rounded-s-lg" :src="type.image" :alt="type.name">
                </div>
                <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white underline">Statistics</h6>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">HP: </span>{{ data.stats.HP }}</p>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">Attack: </span>{{ data.stats.attach }}</p>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">Special attack: </span>{{ data.stats.special_attack }}</p>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">Defense: </span>{{ data.stats.defense }}</p>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">Special defense: </span>{{ data.stats.special_defense }}</p>
                <p class="mb-1 font-normal text-gray-700 dark:text-gray-400"><span class="font-bold">Speed: </span>{{ data.stats.speed }}</p>
                <button href="#" class="inline-block max-w-fit items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                    Add to team
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';
    
    const route = useRoute()
    const { data, pending } = useFetch(`https://pokebuildapi.fr/api/v1/pokemon/${route.params.name}`);
    
</script>

<style scoped>

</style>