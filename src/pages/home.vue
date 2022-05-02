<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useAuthState from '../state/use-auth';
import useMangaState from '../state/use-manga'

const authState = useAuthState()
const mangaState = useMangaState()
const { email, isLoggedIn } = storeToRefs(authState)
const { listManga, total, isLoading } = storeToRefs(mangaState)

const handleLogout = () => {
    authState.logout()
}

onMounted(() => {
    mangaState.loadManga()
})
</script>

<template>
    <div class="px-8 py-2">
        <div v-if="isLoggedIn" class="mb-2">
            <p>{{ email }}</p>
            <button class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg" @click="handleLogout">Logout</button>
        </div>
        <div v-else class="mb-2">
            <a href="/login" class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg">Login</a>
        </div>

        <h1 class="text-2xl mb-2">Home</h1>

        <div class="flex flex-col">
            <a v-for="item in listManga" :key="item.id"
                class="flex flex-col border-b py-2 cursor-pointer hover:bg-slate-100 border-gray-300 first:border-t"
                :href="'/read/' + item.id">
                <h2 class="text-xl font-bold font-serif mb-2">{{ item.title }}</h2>
                <p class="text-sm">{{ item.description }}</p>
            </a>
        </div>
    </div>
</template>