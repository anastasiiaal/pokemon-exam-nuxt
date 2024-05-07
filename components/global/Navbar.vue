<template>
    <footer>


        <ul class="flex w-full justify-center gap-2">
            <li v-for="{ name, path } in menu" :key="path" class="w-[150px]">
                <NuxtLink :to="path">
                    {{ name }}
                </NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<script setup>

    const menu = [
        { name: 'List', path: '/'},
        { name: 'Team', path: '/team'}
    ]

</script>

<style scoped>
    footer {
        position: fixed;
        bottom: 0px;
        left: 0;
        width: 100%;
        padding: 20px;
        backdrop-filter: blur(5px);
        @apply shadow-lg border-t
    }

    ul li a {
        @apply w-[150px] text-center block border border-gray-200 rounded bg-white hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4
    }

    .router-link-exact-active {
        @apply w-[150px] text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white
    }
</style>