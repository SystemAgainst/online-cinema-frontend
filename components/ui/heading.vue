<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Watch movies online",
  },
  classProp: {
    type: String,
    required: true,
    default: `text-white text-opacity-80 font-semibold`
  },
})

const className = computed(() => {
  return props.classProp.includes('xl') ? '' : 'text-3xl';
});
</script>

<template>
  <div :class="[className]">
    <h1>{{ title }}</h1>
  </div>
</template>

<style>
</style>