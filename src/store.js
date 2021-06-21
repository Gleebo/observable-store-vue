import Vue from "vue";

const store = Vue.observable({ store: {} });
const addMap = (key) => {
  Vue.set(store.store, key, { mapId: null, markers: {} });
};

const removeMap = (key) => {
  Vue.delete(store.store, key);
};

const addMarker = (map, marker) => {
  Vue.set(store.store[map].markers, marker, {
    top: null,
    left: null,
    description: ""
  });
};

const removeMarker = (map, key) => {
  Vue.delete(store.store[map].markers, key);
};

const getAsArray = () => {
  const maps = Object.values(store.store);
  return maps.map((map) => {
    return { id: map.mapId, markers: Object.values(map.markers) };
  });
};
export {
  store as default,
  addMap,
  addMarker,
  removeMap,
  removeMarker,
  getAsArray
};
