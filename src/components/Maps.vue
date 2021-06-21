<template>
  <div>
    <Map v-for="map of maps" :key="map" />
    <button @click="add">Add Map</button>
    <button @click="save">Save</button>
  </div>
</template>
<script>
import store, { addMap, getAsArray } from "../store";
import Map from "./Map";
import { nanoid } from "nanoid";

export default {
  data() {
    return {
      store: store.store,
    };
  },
  methods: {
    add() {
      addMap(`map-${nanoid(3)}`);
    },
    save() {
      console.log(getAsArray());
    },
  },
  computed: {
    maps() {
      return Object.keys(store.store);
    },
  },

  components: {
    Map,
  },
};
</script>