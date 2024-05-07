<template>
    <footer>
        <ul>
            <li v-for="{ name, path } in menu" :key="path">
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
        bottom: 20px;
        left: 0;
        width: 100%;
    }
    footer ul {
        @apply flex justify-center;
    }

    li {
        padding: 20px 40px;
        @apply bg-blue-400
    }

    .router-link-exact-active {
        @apply text-red-900 font-bold;
    }
</style>