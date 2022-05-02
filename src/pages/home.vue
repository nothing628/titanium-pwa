<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAuthState from '../state/use-auth';

const authState = useAuthState()
const { email, isLoggedIn } = storeToRefs(authState)

const handleLogout = () => {
    authState.logout()
}
</script>

<template>
    <div class="px-8 py-2">
        <div v-if="isLoggedIn">
            <p>{{ email }}</p>
            <button class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg" @click="handleLogout">Logout</button>
        </div>
        <div v-else>
            <a href="/login" class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg">Login</a>
        </div>

        <h1 class="text-2xl mb-2">Home</h1>
    </div>
</template>