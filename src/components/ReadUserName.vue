<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { profile } from "../stores/main.js";
import { onMounted, computed, onActivated, watch, ref } from "vue";

let $profile = useStore(profile);

window.addEventListener("pageshow", (event) => {
  // Send another pageview if the page is restored from bfcache.
  if (event.persisted) {
    console.log("data persisted");
    console.log("localstorage", localStorage);
  }
});

const update = () => {
  console.log("value1", $profile.value.user);
  //console.log("value2", useStore(profile).value.user);
  //console.log("localstorage activated", localStorage);
};
</script>
<template>
  <button @click="update">Update</button>
  <div class="card">User:{{ $profile.user }}</div>
</template>
