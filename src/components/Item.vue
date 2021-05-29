<template>
  <div class="card" :class="done ? 'done' : null" @click="toggleDone">
    <div class="main">
      <img class="image" :src="imageURL" />
      <p class="name">{{ name }}</p>
    </div>
    <div class="desc">
      <div class="scrollable">
        <p>
          {{ description }} 
        </p>
      </div>
      <div class="controls" @click.stop="">
        <button @click="deleteItem">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
    done: Boolean,
    description: String,
    imageURL: String,
    clickCallback: Function,
    deleteCallback: Function
  },
  methods: {
    toggleDone() {
      this.clickCallback(this.name)
    },

    deleteItem() {
      this.deleteCallback(this.name);
    }
  }
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 234px;
  background: rgba(0 0 0 / 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255 255 255 / 0.25);
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  transition-duration: 0.1s;
}

.card.done {
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

img.image {
  object-fit: cover;
  box-sizing: border-box;
  height: calc(100% - 34px);
  border-radius: 9px;
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

div.desc div.scrollable {
  overflow-y: auto;
  height: 100%;
}

div.desc *::-webkit-scrollbar {
  width: 10px;
}

div.desc *::-webkit-scrollbar-track {
  background: rgba(0 0 0 / 0.5);
}

div.desc *::-webkit-scrollbar-thumb {
  background: rgba(255 255 255 / 0.15);
  border-radius: 5px 0 0 5px;
}

div.desc p {
  margin: 5px;
  padding-bottom: 50px;
}

.card:hover div.main {
  opacity: 0;
  transform: translateY(-100%);
}

.card:hover div.desc {
  opacity: 1;
  transform: scale(1) translateY(0%);
}

div.desc div.controls {
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
</style>