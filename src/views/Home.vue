<script setup>
import useUserRepositories from '../components/useUserRepositories'
import useRepositoryNameSearch from '../components/useRepositoryNameSearch'
import submitForm from '../components/submitForm.vue'
import { ref } from 'vue'
const user = ref('')
const { repositories } = useUserRepositories()
const { searchQuery, repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)
searchQuery.value = 'lisi'
const submitMethod = (val) => {
  console.log("commit",val)
}
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
    <submitForm data="仓库提交" @submitRepo="submitMethod" />
  </div>
</template>

