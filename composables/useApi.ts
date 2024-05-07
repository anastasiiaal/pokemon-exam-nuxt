export const useApi = () => {
    const config = useRuntimeConfig()

    const baseUrl = 'https://pokebuildapi.fr/api/v1';

    async function getPokemons() {
        const response = await $fetch(baseUrl + '/pokemon/limit/100');
        return response
    }

    async function getOnePokemon(name: string) {
        const response = await $fetch(baseUrl + '/pokemon/' + name);
        return response
    }

    return { getPokemons, getOnePokemon }
}