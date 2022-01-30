<template>
  <div>
    Hello from Nuxt Typed Router
    <button type="button" @click="navigate">Click me to navigate</button>
  </div>
</template>

<script setup lang="ts">
import { useTypedRouter } from 'nuxt-typed-router/hook';

const { router, routes } = useTypedRouter();

function navigate() {
  console.log(routes.childTwo.profile.id.slug.index === 'parent-child-two-profile-id-slug')
  router.push({ 
    name: 'parent-child-two-profile-id-slug',
    params: {
      id: 1,
      slug: 'foo'
    }
    
  });
}
</script>
