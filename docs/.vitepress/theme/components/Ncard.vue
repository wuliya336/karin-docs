<script setup lang="ts">
import { useRouter } from 'vitepress'
import { defineProps, computed } from 'vue'

interface NCardProps {
    title: string
    link: string
    target?: string
}

const props = defineProps<NCardProps>()
const router = useRouter()

const isExternal = (path: string) => {
    return /^(https?:|mailto:|tel:)/.test(path)
}

const normalizedLink = computed(() => {
    return isExternal(props.link)
        ? props.link
        : props.link.replace(/^\.*\//, '')
})

const handleClick = (e: MouseEvent) => {
    if (!isExternal(props.link)) {
        e.preventDefault()
        router.go(normalizedLink.value)
    }
}
</script>

<template>
    <ClientOnly>
        <div class="ncard">
            <a :href="normalizedLink" :target="isExternal(link) ? '_blank' : '_self'" @click="handleClick">
                <div class="ncardBody">
                    <div class="card-title">{{ title }}</div>
                    <div class="card-text">
                        <slot />
                    </div>
                </div>
            </a>
        </div>
    </ClientOnly>
</template>

<style scoped>
.ncard {
    border: 1px solid #ebedf0;
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .15);
    margin-bottom: 2em;
    border-radius: 8px;
    transition: all 200ms ease;
    overflow: hidden;
}

.ncard:hover {
    border-color: var(--vp-c-brand);
    box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, .1);
    transform: translateY(-2px);
}

.ncardBody {
    padding: 1.8em;
    background: var(--vp-c-bg);
}

a {
    color: var(--vp-c-text-1);
    text-decoration: none;
    display: block;
}

.card-title {
    font-size: 1.5em;
    margin-bottom: .8em;
}

.card-text {
    font-size: 0.9em;
    line-height: 1.6;
}
</style>