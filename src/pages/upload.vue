<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import UploadForm from '../components/manga/form.vue'
import useUploadState from '../state/use-upload'

const uploadState = useUploadState()
const router = useRouter()
const { isComplete, isLoading } = storeToRefs(uploadState)
const handleSubmit = (title: string, description: string) => {
    uploadState.submitManga({
        title,
        description
    }).then(() => {

    }).catch(console.error)
}
</script>

<template>
    <div class="px-8 py-2">
        <a href="/">Back</a>
        <h1 class="text-2xl mb-2">Upload</h1>

        <UploadForm @submit="handleSubmit" />
    </div>
</template>