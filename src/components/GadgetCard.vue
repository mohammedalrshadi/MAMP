<script setup>
defineProps({
  gadget: Object
})

const addToCart = (name) => {
  alert(name + ' added to cart!')
}
</script>

<template>
  <div class="card">
    
    <img
      :src="gadget.imageUrl"
      width="250"
    />

    <h2>{{ gadget.name }}</h2>

    <p>Category: {{ gadget.category }}</p>

    <p>Price: RM {{ gadget.price }}</p>

    <p v-if="gadget.stockStatus">
      In Stock
    </p>

    <p v-else>
      Out Of Stock
    </p>

    <button @click="addToCart(gadget.name)">
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