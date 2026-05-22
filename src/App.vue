<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/dashboard">
      Dashboard
    </RouterLink>

    |

    <RouterLink to="/contact">
      Contact
    </RouterLink>
  </nav>

  <RouterView />
</template>