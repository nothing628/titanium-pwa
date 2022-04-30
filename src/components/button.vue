<script setup lang="ts">

defineProps<{ disabled?: boolean }>()
const emits = defineEmits<{
    (event: 'click'): void
}>()

const handleClick = () => {
    emits('click')
}
</script>

<template>
    <button @click="handleClick"
        :disabled="disabled"
        class="h-[60px] disabled:bg-[#B9ACBC]/30 disabled:text-[#50426C]/80 bg-[#5314D6]/75 text-white text-base font-semibold font-sans px-8 py-4 rounded-full">
        <slot></slot>
    </button>
</template>