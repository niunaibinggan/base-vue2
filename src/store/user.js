import { defineStore } from 'pinia'

const useStore = defineStore('useStore', {
  persist: {
    enabled: true
  },
  state: () => {
    return {
      info: {
        name: 'Anny'
      }
    }
  },
  actions: {
    changeName(name) {
      this.info.name = name
    }
  }
})

export default useStore
