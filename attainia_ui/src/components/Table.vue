<template>
    <div>
        <b-table hover :items="users" :tbody-tr-class="rowClass" :fields="fields"></b-table>
    </div>
</template>

<script>
  export default {
    name: "Table",
    props: ["users", "fields", "toggleType"],
    data() {
      return {

      }
    },
    methods: {
        rowClass(item, type){
        if (!item || type !== 'row') return
        
        if (item.toggle === true) return `${this.toggleType}`
        }
    }
  }
</script>