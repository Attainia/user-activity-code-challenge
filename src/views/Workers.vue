<template>
  <div class="workers">
    <userslist msg="Workers"/>
  </div>
</template>

<script>
import userslist from '@/components/userslist.vue'
export default {
  name: 'Workers',
  components: {
    userslist
  }
}
</script>
