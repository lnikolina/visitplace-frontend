import { reactive } from 'vue'

const store = reactive({
    searchTerm: '',
    currentUser: null,
  })

export default store;