
<template>
  <span
    v-editable="blok"
  >
    {{ blok.text }}
  </span>
</template>

<script setup>
defineProps({ blok: Object });
</script>
