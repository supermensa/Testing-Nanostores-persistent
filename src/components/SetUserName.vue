<script setup lang="ts">
import { profile } from "../stores/main.js";
import { useStore } from "@nanostores/vue";

const $profile = useStore(profile);
const updateUserName = (event) => {
  profile.setKey("user", event.target.value);
};
</script>
<template data-server-rendered="true">
  <div class="card">
    User: {{ $profile.user }}<br />
    <input type="text" @input="updateUserName" />
  </div>
</template>
