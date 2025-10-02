<template>
    <div class="relative group inline-block">
        <button :class="[
            'flex items-center gap-2 transition-colors',
            variantClasses,
        ]">
            <slot />
        </button>
        <!-- Tooltip -->
        <span v-if="tooltip" class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-md text-xs 
             bg-gray text-gray-800 shadow-md border border-gray-200 
             opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            {{ tooltip }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    variant?: 'primary' | 'outline' | 'gray' | 'danger'
    tooltip?: string
}

const props = defineProps<Props>()

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'px-5 py-2 rounded-md bg-purple-600 text-white hover:bg-accent/80'
        case 'outline':
            return 'px-5 py-2 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        case 'gray':
            return 'px-5 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300'
        case 'danger':
            return 'px-5 py-2 rounded-md bg-red-500 text-white hover:bg-red-600'
        default:
            return 'p-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 dark:bg-[#0F1015] dark:hover:bg-[#242730]'
    }
})
</script>
