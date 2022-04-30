<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const intervalMS = 60 * 60 * 1000
const {
    offlineReady,
    needRefresh,
    updateServiceWorker,
} = useRegisterSW({
    onRegistered(r) {
        if (r) {
            setInterval(() => {
                r.update()
            }, intervalMS)
        }
    }
})

const close = async () => {
    offlineReady.value = false
    needRefresh.value = false
}
</script>

<template>
    <div v-if="offlineReady || needRefresh" class="hidden" role="alert">
        <div class="message">
            <span v-if="offlineReady">
                App ready to work offline
            </span>
            <span v-else>
                New content available, click on reload button to update.
            </span>
        </div>
        <!-- <button v-if="needRefresh" @click="updateServiceWorker()">
            Reload
        </button>
        <button @click="close">
            Close
        </button> -->
    </div>
</template>
