<template>
  <div @click="cut">is home + {{ count }} {{ info }}</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import useStore from '@/store/user'

export default {
  name: 'Home',
  computed: {
    ...mapState(useStore, ['info'])
  },
  created() {
    this.changeName('Bob')
  },
  methods: {
    ...mapActions(useStore, ['changeName'])
  }
}
</script>
