<template>
  <div>
    <div>{{data}}</div>
    <input v-model="commitText" />
    <div class="submit-btn" @click="submitRepo">提交</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const commitText = ref('')
const props = defineProps({
  data: String
})
const commitEmit = defineEmits(['submitRepo'])
const submitRepo = () => {
  commitEmit('submitRepo',commitText.value)
}
</script>
<style scoped>
.submit-btn {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #eee;
  color: #000;
}
</style>
