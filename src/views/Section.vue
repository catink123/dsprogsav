<template>
  <div class="section">
    <div class="addContainer">
      <button @click="toggleAddWindow">Add</button>
      <transition name="fade">
        <add-window
          class="addWindow"
          @onAdd="addItem"
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
        :isDone="item.isDone"
        :items="item.items"
        @onItemClick="toggleDone"
        @onDelete="deleteItem(item.name)"
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import AddWindow from "@/components/AddWindow.vue";

export default {
  name: "Section",
  data: () => ({
    items: [],
    showAddWindow: false,
  }),
  props: {
    gameName: String,
  },
  computed: {
    compressed() {
      return this.compressedImage;
    },
  },
  components: {
    Item,
    AddWindow,
  },
  methods: {
    addItem(data) {
      let item = this.items.find(val => val.name === data.name);
      if (item === undefined) {
        this.items.push(data);
        this.save();
        this.toggleAddWindow();
      } else {
        alert('An item with that name already exists in this section!')
      }
    },

    toggleDone(data) {
      var index = this.items.findIndex(val => val.name === data.name);
      var itemIndex = this.items[index].items.findIndex(val => val.text === data.itemKey);
      this.items[index].items[itemIndex].isDone = !this.items[index].items[itemIndex].isDone;
      this.save();
    },

    deleteItem(key) {
      var index = this.items.findIndex(val => val.name === key);
      this.items.splice(index, 1);
      this.save();
    },

    toggleAddWindow() {
      this.showAddWindow = !this.showAddWindow;
    },

    updateContents() {
      this.items = this.getData();
      console.log(this.items);
    },

    getData() {
      var appData = localStorage.getItem("dsprogsav");
      var ret;
      if (appData !== null) {
        var data = JSON.parse(appData)[this.gameName];
        if (data !== null)
          ret = data;
        else
          ret = [];
      } else {
        ret = [];
      }
      return ret;
    },

    setData(data) {
      var appData = localStorage.getItem("dsprogsav");
      if (appData === null) appData = {};
      else appData = JSON.parse(appData);
      appData[this.gameName] = data;
      localStorage.setItem("dsprogsav", JSON.stringify(appData));
    },

    save() {
      this.setData(JSON.stringify(this.items));
    }
  },
  watch: {
    gameName: function () {
      this.updateContents();
    },

    loading: function() {
      this.updateContents();
    }
  },
  mounted() {
    var savedItems = this.getData();
    if (savedItems !== null) this.items = JSON.parse(savedItems);
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