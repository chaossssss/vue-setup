<script setup>
import useUserRepositories from '../components/useUserRepositories'
import useRepositoryNameSearch from '../components/useRepositoryNameSearch'
import { ref } from 'vue'
const user = ref('')
const { repositories } = useUserRepositories()
const { searchQuery, repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)
</script>

<template>
  <div>
    <div>
      用户<input v-model="user" />
    </div>
    <div>{{user}}</div>
    <div>
      仓库<input v-model="searchQuery" />
    </div>
    <div v-for="(item, index) in repositoriesMatchingSearchQuery" :key="index">{{ item.repoName }}</div>
  </div>
</template>

<style scoped>

</style>
