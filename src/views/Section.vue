<template>
  <div class="section">
    <div class="addContainer">
      <button @click="toggleAddWindow">Add</button>
      <transition name="fade">
        <add-window
          class="addWindow"
          :addCallback="addItem"
          :cancelCallback="toggleAddWindow"
          v-if="showAddWindow"
        />
      </transition>
    </div>
    <div class="itemContainer">
      <item
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :done="item.done"
        :imageURL="item.image"
        :clickCallback="toggleDone"
        :deleteCallback="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import AddWindow from "@/components/AddWindow.vue";
import compress from "@/ext/compress.js";
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "Section",
  data: () => ({
    items: [],
    showAddWindow: false,
  }),
  getters: {
    /* items() {
      return store.state[this.gameName][this.sectionName];
    } */
    needsUpdate() {
      return store.state.needsUpdate;
    },
  },
  props: {
    gameName: String,
    sectionName: String,
  },
  computed: {
    compressed() {
      return this.compressedImage;
    },

    ...mapGetters(["loading"]),
  },
  components: {
    Item,
    AddWindow,
  },
  methods: {
    addItem(data) {
      let item = store.state[this.gameName][this.sectionName].find((val) => {
        if (val.name === data.name) return true;
        return false;
      });
      if (item === undefined) {
        compress(data.image).then((val) => {
          store.commit("addNewItem", {
            gameName: this.gameName,
            sectionName: this.sectionName,
            data: {
              ...data,
              image: val,
              done: false,
            },
          });
          this.toggleAddWindow();
        });
      } else {
        alert('An item with that name already exists in this section!')
      }
    },

    toggleDone(key) {
      store.commit("toggleDone", {
        gameName: this.gameName,
        sectionName: this.sectionName,
        key,
      });
    },

    deleteItem(key) {
      store.commit("deleteItem", {
        gameName: this.gameName,
        sectionName: this.sectionName,
        key,
      });
    },

    toggleAddWindow() {
      this.showAddWindow = !this.showAddWindow;
    },
  },
  watch: {
    gameName: function () {
      this.items = store.state[this.gameName][this.sectionName];
    },

    sectionName: function () {
      this.items = store.state[this.gameName][this.sectionName];
    },

    loading() {
      this.items = store.state[this.gameName][this.sectionName];
    },
  },
  created() {
    this.items = store.state[this.gameName][this.sectionName];
  },
};
</script>


<style scoped>
div.section {
  padding-top: 115px;
}

div.itemContainer {
  display: flex;
  gap: 10px;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.addWindow {
  position: absolute;
  margin: 5px;
}

.addContainer {
  position: fixed;
  z-index: 10;
}

.addContainer button {
  margin: 5px;
  margin-bottom: 0;
}
</style>