<template>
  <div style="position: relative;display: flex;align-items: center;">
    <input :class="{ 'focused': focused }" @focus="focused = true" @blur="focused = false" v-model="value" :placeholder="label" type="text"/>
    <img v-if="state" src="..\assets\box.svg" @click="value=''" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String
    },
    state: {
      type: Boolean
    }
  },
  data(){
    const value = ""
      return {
          focused: false,
          value
      }
  },
  watch: {
    input: function(value){
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
input {
  border: none;
  height: 50px;
  width: 100%;
  border-bottom: 2px solid #EDEDED;
  padding-left: 20px; 
}
input.focused {
  border-color: #BBBBBB;
}
img{
  height: 50%;
  position: absolute;
  right: 10px;
}
</style>