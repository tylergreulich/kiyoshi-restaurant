<script>
export default {};
</script>

<template>
  <div class="welcome-jumbo">
    {{ $store.state.count }}
    <button @click="$store.state.mutations.increment()">Inc</button>
  </div>
</template>
