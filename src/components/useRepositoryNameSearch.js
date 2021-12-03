import { ref, computed, watch } from 'vue'

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(repository => {
      return repository.repoName.includes(searchQuery.value)
    })
  })
  watch(searchQuery,(val) => {
    console.log(val)
  })
  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}