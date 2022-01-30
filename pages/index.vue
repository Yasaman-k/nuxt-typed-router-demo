<template>
  <div>
    Hello from Nuxt Typed Router
    <button type="button" @click="navigate">Click me to navigate</button>
  </div>
</template>

<script setup lang="ts">
import { useTypedRouter } from '~/models';

const { router, routes } = useTypedRouter();

function navigate() {
  router.push({ 
    name: routes.childTwo.profile.id.slug.index,
    params: {
      id: 1,
      slug: 'foo'
    }
    
  });
}
</script>
