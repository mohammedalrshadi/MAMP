<script setup>
defineProps({
  gadget: Object
})

defineEmits(['add-to-cart'])
</script>

<template>
  <div class="card">

    <img :src="gadget.imageUrl" width="250" />

    <h2>{{ gadget.name }}</h2>

    <p>Category: {{ gadget.category }}</p>

    <p>Price: RM {{ gadget.price }}</p>

    <p v-if="gadget.stockStatus">In Stock</p>
    <p v-else>Out Of Stock</p>

    <button @click="$emit('add-to-cart', gadget)">
      Add to Cart
    </button>

  </div>
</template>

<style scoped>
.card {
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
}
</style>