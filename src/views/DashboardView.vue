<script setup>
import { ref, computed, onMounted } from 'vue'
import { useGadgetStore } from '../stores/gadgetStore'
import GadgetCard from '../components/GadgetCard.vue'

const gadgetStore = useGadgetStore()

const searchQuery = ref('')

const filteredGadgets = computed(() => {
  const q = searchQuery.value.toLowerCase()
  if (!q) return gadgetStore.gadgets
  return gadgetStore.gadgets.filter(g =>
    g.name.toLowerCase().includes(q) ||
    g.category.toLowerCase().includes(q)
  )
})

onMounted(() => {
  gadgetStore.fetchGadgets()
})

// Handles the emit event from GadgetCard
function handleAddToCart(gadget) {
  alert(gadget.name + ' was added to cart!')
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search gadgets..."
    />

    <GadgetCard
      v-for="gadget in filteredGadgets"
      :key="gadget.id"
      :gadget="gadget"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>