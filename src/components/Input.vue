<template>
  <div>
    <div>
      <label for="">top</label>
      <input type="text" v-model="marker.top" />
    </div>
    <div>
      <label for="">left</label>
      <input type="text" v-model="marker.left" />
    </div>
    <div>
      <label for="">description</label>
      <input type="text" v-model="marker.description" />
    </div>
    <button @click="remove">remove marker</button>
  </div>
</template>
<script>
import store, { removeMarker } from "../store";
export default {
  data() {
    return {
      marker: store.store[this.$parent.$vnode.key].markers[this.$vnode.key],
    };
  },
  methods: {
    setTop(event) {
      store.store[this.$parent.$vnode.key].markers[this.$vnode.key].top =
        event.target.value;
    },
    remove() {
      removeMarker(this.$parent.$vnode.key, this.$vnode.key);
    },
  },
};
</script>