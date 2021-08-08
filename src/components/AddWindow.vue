<template>
  <div class="window">
    <h1>Add a new entry</h1>
    <form @submit="submit">
      <p>
        <label for="name">Name </label>
        <input :class="nameError ? 'err' : null" type="text" id="name" @input="nameError = false" />
      </p>
      <p>
        <label for="newItem">Items </label>
      </p>
      <p>
        <input type="text" id="newItem" />
        <button id="add" @click="addItem">Add</button>
      </p>

      <div class="items">
        <div class="item" v-for="item in items" :key="item">
          <p>{{ item }}</p>
          <button @click.prevent="removeItem(item)">✖</button>
        </div>
      </div>

      <!-- <p>
        <label for="img">Image </label>
      </p>
      <p>
        <input
          :class="imageError ? 'err' : null"
          type="file"
          id="img"
          accept="image/*"
          @change="imageError = false"
        />
      </p> -->
    </form>
    <div class="controls">
      <button id="add" @click="add">Add</button>
      <button id="cancel" @click="cancelCallback">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddWindow",
  props: {
    addCallback: Function,
    cancelCallback: Function,
  },
  data: () => ({
    nameError: false,
    imageError: false,
    items: []
  }),
  methods: {
    add() {
      let name = document.querySelector("#name").value;
      // let description = document.querySelector("#desc").value;
      // let file = document.querySelector("#img").files[0];
      // let image;
      if (name === "") {
        this.nameError = true;
        return;
      }
      /* if (file !== undefined) {
        let imgLoad = new Promise((resolve, reject) => {
          let fr = new FileReader();
          fr.onload = () => {
            resolve(fr.result);
          };
          fr.onerror = reject;
          fr.readAsDataURL(file);
        });
        imgLoad
          .then((v) => {
            image = v;

            this.addCallback({ name, description, image });
          })
          .catch((reason) => console.error(reason));
      } else {
        this.imageError = true;
      } */
      var items = [];
      for (const i in this.items) {
        items.push({
          text: this.items[i],
          isDone: false
        })
      }
      this.$emit("onAdd", {
        name,
        items
      })
    },

    addItem() {
      var itemName = document.querySelector("#newItem").value;
      if (!this.items.includes(itemName)) {
        this.items.push(itemName);
      }
    },

    removeItem(name) {
      var index = this.items.findIndex(val => val === name);
      this.items.splice(index, 1);
    },

    submit(e) {
      e.preventDefault();
    }
  },
};
</script>

<style scoped>
.window {
  width: fit-content;
  height: fit-content;
  border: 1px solid rgba(255 255 255 / 0.25);
  border-radius: 10px;
  background: rgba(0 0 0 / 0.5);
  overflow: hidden;
  backdrop-filter: blur(5px);
}

h1 {
  margin: 10px;
  font-size: 24px;
}

form > p {
  margin: 10px;
  display: flex;
  gap: 5px;
}

label {
  text-align: center;
  vertical-align: middle;
  height: fit-content;
  margin: auto 0;
}

form textarea {
  box-sizing: border-box;
  width: 100%;
  resize: none;
}

input[type="file"] {
  max-width: 200px;
}

.controls {
  display: flex;
  gap: 5px;
  margin: 5px;
  box-sizing: border-box;
}

.controls button {
  flex-grow: 1;
  height: 32px;
  border-radius: 0;
  border: 1px solid;
  border-radius: 6px;
  background: hsla(var(--hue) 100% 25% / 0.5);
  color: hsl(var(--hue) 100% 50%);
  border-color: hsla(var(--hue) 100% 50% / 0.5);
  transition-duration: 0.05s;
}

.controls button:hover {
  background: hsla(var(--hue) 100% 40% / 0.5);
}

.controls button:active {
  background: hsla(var(--hue) 100% 10% / 0.5);
  border-color: hsla(var(--hue) 100% 25% / 0.5);
}

button#add {
  --hue: 120;
}

button#cancel {
  --hue: 0;
}

form input[type="text"],
form textarea {
  appearance: none;
  outline: none;
  background: rgba(0 0 0 / 0.5);
  border: 1px solid rgba(255 255 255 / 0.5);
  border-radius: 5px;
  line-height: 24px;
  font-family: sans-serif;
  color: white;
  transition-duration: 0.05s;
}

form input[type="text"]:hover,
form textarea:hover {
  background: rgba(50 50 50 / 0.5);
}

form input[type="text"]:focus,
form textarea:focus {
  background: white;
  color: black;
}

form input.err {
  border-color: red;
  background-color: rgba(255 0 0 / 0.25);
}

div.items {
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

div.item {
  display: flex;
}

div.item p {
  margin: auto 0;
  flex-grow: 1;
}

div.item button {
  width: 10px;
  /* height: 25px; */
}
</style>