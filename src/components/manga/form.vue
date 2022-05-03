<script setup lang="ts">
import { ref } from 'vue'
const title = ref("")
const description = ref("")
const emit = defineEmits<{ (event: "submit", title: string, description: string): void }>()

const handleFormSubmit = () => {
    emit('submit', title.value, description.value)
}
</script>

<template>
    <form v-on:submit.prevent="handleFormSubmit">
        <div class="flex flex-col mb-2">
            <label>Title :</label>
            <input required class="border h-12 rounded-xl px-4 py-2" type="text" name="email" v-model="title" />
        </div>
        <div class="flex flex-col mb-2">
            <label>Description :</label>
            <textarea rows="3" required class="border rounded-xl px-4 py-2" name="password"
                v-model="description" />
        </div>

        <button class="bg-cyan-500 text-white text-lg px-8 py-2 rounded-lg" type="submit">
            Upload
        </button>
    </form>
</template>