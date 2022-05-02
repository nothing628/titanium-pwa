<script setup lang="ts">
import { ref } from 'vue'
const email = ref("")
const password = ref("")
const emit = defineEmits<{ (event: "submit", email: string, password: string): void }>()

const handleFormSubmit = () => {
    emit('submit', email.value, password.value)
}
</script>

<template>
    <form v-on:submit.prevent="handleFormSubmit">
        <div class="flex flex-col mb-2">
            <label>Email :</label>
            <input required class="border h-12 rounded-xl px-4 py-2" type="email" name="email" v-model="email" />
        </div>
        <div class="flex flex-col mb-2">
            <label>Password :</label>
            <input required class="border h-12 rounded-xl px-4 py-2" type="password" name="password"
                v-model="password" />
        </div>

        <button class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg" type="submit">
            Login
        </button>
    </form>
</template>