<template>
  <div>
    <Input
      v-for="marker of markers"
      :key="marker"
      @top="setTop"
      :mapKey="$vnode.key"
    />
    <button @click="add">Add marker</button>
    <button @click="remove">Delete</button>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import store, { removeMap, addMarker } from "../store";
import Input from "./Input";
export default {
  methods: {
    remove() {
      removeMap(this.$vnode.key);
    },
    add() {
      const name = `marker-${nanoid(4)}`;
      addMarker(this.$vnode.key, name);
    },
    setTop(value) {},
  },
  computed: {
    markers() {
      return Object.keys(store.store[this.$vnode.key].markers);
    },
  },
  components: {
    Input,
  },
};
</script>