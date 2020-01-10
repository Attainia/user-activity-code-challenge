<template>
  <div class="inactives">
    <userslist msg="Inactives"/>
  </div>
</template>

<script>
import userslist from '@/components/userslist.vue'
export default {
  name: 'Inactives',
  components: {
    userslist
  }
}
</script>
