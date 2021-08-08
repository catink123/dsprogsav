<template>
  <div
    id="app"
    :style="`background-image: linear-gradient(transparent 95%, black), url(${currentBg()})`"
  >
    <div id="nav">
      <img src="@/assets/fire.gif" id="fire" />
      <div class="gameList">
        <router-link
          v-for="game in gameList"
          :key="game"
          :to="game"
          class="section"
        >
          <img :src="gameData[game].logo" />
        </router-link>
      </div>
    </div>
    <router-view class="marginTop" />
  </div>
</template>

<script>
import games from "./games";
import placeholderBG from './assets/placeholderBG.jpg';

export default {
  name: "App",
  computed: {
    gameData: () => games,
    gameList: () => Object.keys(games),
  },
  methods: {
    update() {
      this.$router.push(
        "/" +
          this.currentGame +
          "/" +
          this.gameData[this.currentGame].sections[0].path
      );
    },

    save() {
      console.log("save");
    },

    load() {
      console.log("load");
    },

    currentBg() {
      var bg;
      if (this.$router.currentRoute.path !== "/") {
        bg = games[this.$router.currentRoute.path.replace("/", "")].bg;
      } else {
        bg = placeholderBG;
      }
      return bg;
    },
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
  position: fixed;
  z-index: 15;
  width: 100vw;
  overflow-x: visible;
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
  text-decoration: none;
  height: fit-content;
  max-height: 100px;
  margin: 5px;
}

#nav a > img {
  margin: 0;
  border-radius: 3px;
  pointer-events: none;
}

#nav a.section.router-link-exact-active,
#nav a.active {
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
  transition-duration: 0.1s;
  user-select: none;
}

button:hover {
  background: rgba(30 30 30 / 0.95);
}

button:active {
  background: white;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.gameList {
  display: flex;
  gap: 5px;
  flex-grow: 1;
  min-width: 0;
  overflow-x: auto;
  max-height: 115px;
}
</style>
