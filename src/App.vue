<template>
  <div id="app" :style="`background-image: url(${images.bg})`">
    <div id="nav">
      <img src="@/assets/fire.gif" id="fire" />
      <router-link to="/">
        <img src="@/assets/dslogo.png" />
      </router-link>
      <div class="separator" />
      <div class="appControls">
        <button @click="save">Save</button>
        <button @click="load">Load</button>
      </div>
      <router-link to="/dsRemastered/armory">
        <img src="@/assets/Armory.png" />
      </router-link>
      <router-link to="/dsRemastered/pyromancy">
        <img src="@/assets/Pyromancy.png" />
      </router-link>
      <router-link to="/dsRemastered/religion">
        <img src="@/assets/Religion.png" />
      </router-link>
    </div>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
import images from "./images";
import {mapActions} from 'vuex';
import store from '@/store'

export default {
  name: "App",
  computed: {
    images: () => images,
  },
  methods: {
    ...mapActions(["save", "load"])
  },
  mounted() {
    store.dispatch("load")
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: black;
  font-family: sans-serif;
  color: white;
}

#app {
  height: 100vh;
  background-size: cover;
  background-position: center;
}

#nav {
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  background: rgba(0 0 0 / 0.25);
  backdrop-filter: blur(10px);
}

#nav img {
  max-height: 100px;
  margin: 5px;
}

img#fire {
  margin-left: 10px;
}

#nav a {
  display: block;
  font-weight: bold;
  color: white;
  padding: 2px;
  margin: 5px;
  text-decoration: none;
  height: fit-content;
  max-height: 100px;
}

#nav a > img {
  margin: 0;
  border-radius: 3px;
}
#nav a.router-link-exact-active {
  color: black;
  background: rgba(255 255 255 / 0.25);
  border-radius: 5px;
}

div.separator {
  flex-grow: 1;
}

div.appControls {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 5px 0 5px 0;
}

button {
  flex-grow: 1;
  color: white;
  background: rgba(0 0 0 / 0.75);
  border: 1px solid rgba(255 255 255 / 0.5);
  outline: none;
  padding: 5px;
  border-radius: 6px;
  transition-duration: .1s;
  user-select: none;
}

button:hover {
  background: rgba(30 30 30 / 0.95);
}

button:active {
  background: white;
  color: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
