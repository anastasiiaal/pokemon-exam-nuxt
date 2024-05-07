<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
        <a :href="`/${pokemon.name}`">
            <img class="rounded-t-lg h-[200px] w-auto object-contain mx-auto" :src="pokemon.image" :alt="pokemon.name" />
        </a>
        <div class="p-5">
            <a :href="`/${pokemon.name}`">
                <h5 class="text-2xl text-center mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ pokemon.name }}
                </h5>
            </a>
            <div class="flex gap-3 justify-center">

                <button @click="addToTeam" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Delete
                </button>
                <a :href="`/${pokemon.name}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Learn more
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});

const team = useState('team', () => [])

function addToTeam() {
    team.value.push(props.pokemon)
}
</script>

<style scoped>

</style>