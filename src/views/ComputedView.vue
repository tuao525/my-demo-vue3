<template>
    <h3>计算属性</h3>
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }} - {{ publishedBooksMessage  }}</span>
    <button @click="deleteBooks">删除</button>
    <p>{{ fullName }}</p>
</template>
<script setup>
import { reactive, computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  firsName: 'John',
  lastName: 'Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'YES' : 'NO'
})
const deleteBooks = () => {
  author.books.pop()
  fullName.value = 'John perter'
}
const fullName = computed({
  get () {
    return author.firsName + ' ' + author.lastName
  },
  set (newVal) {
    [author.firsName, author.lastName] = newVal.split(' ')
  }
})
</script>
