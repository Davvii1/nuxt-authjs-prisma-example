<template>
  <div>
    <div>
      <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
      <button @click="signIn(`github`)">JS Sign In</button>
      <button @click="signOut()">Sign Out</button>
    </div>
    <div>
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ session }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>
