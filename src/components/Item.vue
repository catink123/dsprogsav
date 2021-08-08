<template>
  <div class="card" :class="cardDone ? 'done' : null">
    <div class="main">
      <p class="name" :class="name.length >= 30 ? 'longName' : null">{{ name }}</p>
      <div class="items scrollable">
        <p class="item" :class="item.isDone ? 'done' : null" v-for="item in items" :key="item.text" @click="toggleDone(item.text)">{{ item.text }}</p>
      </div>
    </div>
    <div class="controls">
      <button @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
    items: Array
  },
  computed: {
    cardDone() {
      var isCardDone = true;
      for (const i in this.items) {
        if (!this.items[i].isDone) isCardDone = false;
      }
      return isCardDone;
    }
  },
  methods: {
    deleteItem() {
      this.$emit("onDelete")
    },

    toggleDone(key) {
      this.$emit("onItemClick", {
        name: this.name,
        itemKey: key
      })
    }
  }
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  background: rgba(0 0 0 / 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255 255 255 / 0.25);
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  transition-duration: 0.1s;
}

.done {
  background: rgba(0 100 0 / 0.5);
}

div.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition-duration: 0.15s;
}

p.name {
  margin: 0;
  text-align: center;
  padding: 5px;
  background: rgba(0 0 0 / 0.5);
  border-radius: 9px;
  line-height: 24px;
}

p.name.longName {
  line-height: normal;
  font-size: 12px;
}

div.desc {
  position: absolute;
  top: 0;
  opacity: 0;
  transition-duration: 0.15s;
  transform: scale(0.5) translateY(100%);
  height: 100%;
  width: 100%;
}

div.scrollable {
  overflow-y: auto;
  height: 100%;
  padding-bottom: 35px;
}

div.scrollable::-webkit-scrollbar {
  width: 10px;
}

div.scrollable::-webkit-scrollbar-track {
  background: rgba(0 0 0 / 0.5);
}

div.scrollable::-webkit-scrollbar-thumb {
  background: rgba(255 255 255 / 0.15);
  border-radius: 5px 0 0 5px;
}

div.desc p {
  margin: 5px;
  padding-bottom: 50px;
}

div.controls {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 5px;
  box-sizing: border-box;
}

div.controls button {
  flex-grow: 1;
  color: white;
  background: rgba(0 0 0 / 0.75);
  border: 1px solid rgba(255 255 255 / 0.5);
  outline: none;
  padding: 5px;
  border-radius: 6px;
  transition-duration: .1s;
}

div.controls button:hover {
  background: rgba(30 30 30 / 0.95);
}

div.controls button:active {
  background: white;
  color: black;
}

div.items {
  display: flex;
  flex-direction: column;
}

p.item {
  font-family: sans-serif;
  border-bottom: 1px solid rgba(255 255 255 / 0.25);
  margin: 0;
  padding: 10px;
  transition-duration: .1s;
}

p.item:last-child {
  border-bottom: none;
}
</style>