<script setup>
import { onMounted } from 'vue'
import { useGadgetStore } from '../stores/gadgetStore'
import GadgetCard from '../components/GadgetCard.vue'

const gadgetStore = useGadgetStore()

onMounted(() => {
  gadgetStore.fetchGadgets()
})
</script>

<template>
  <div>

    <h1>Dashboard</h1>

    <GadgetCard
      v-for="gadget in gadgetStore.gadgets"
      :key="gadget.id"
      :gadget="gadget"
    />

  </div>
</template>