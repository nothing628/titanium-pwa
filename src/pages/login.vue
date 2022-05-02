<script setup lang="ts">
import LoginForm from '../components/login/form.vue'

const handleSubmit = (email: string, password: string) => {
    console.log(email, password)
}
</script>

<template>
    <div class="px-8 py-2">
        <h1 class="text-2xl mb-2">Login</h1>

        <LoginForm @submit="handleSubmit" />
    </div>
</template>