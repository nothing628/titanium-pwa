<script setup lang="ts">
import { useRouter } from 'vue-router'
import LoginForm from '../components/login/form.vue'
import useAuthState from '../state/use-auth'

const router = useRouter()
const authState = useAuthState()
const handleSubmit = (email: string, password: string) => {
    authState.login(email, password).then(() => {
        router.replace('/')
    }).catch(console.error);
}
</script>

<template>
    <div class="px-8 py-2">
        <h1 class="text-2xl mb-2">Login</h1>

        <LoginForm @submit="handleSubmit" />
    </div>
</template>