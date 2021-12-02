import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories() {
  const repositories = ref([{
    userName: 'zhangsan',
    repoName: 'zhangsan repo'
  },{
    userName: 'lisi',
    repoName: 'lisi repo'
  }])
  return {
    repositories
  }
}