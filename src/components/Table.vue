<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(name, index) in columnNames" :key="index">
            {{ name }}
          </th> 
        </tr>
      </thead>

      <tbody>       
        <tr 
          v-for="user in users" 
          :key="user.id"
          :class="returnUserClass(user)">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.last_login }}</td>
          <td>{{ user.login_count }}</td>
          <td>{{ user.project_count }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="toggleHighlight">Highlight Login Count</button>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      users: {
        type: Object,
        required: true
      },
      columnNames: {
        type: Array,
        required: true
      },
      pageNumber: {
        type: Number,
        required: true
      }
    },
    data( ) {
      return {
        highlightUsers: false
      }
    },
    methods: {
      toggleHighlight( ) {
        this.highlightUsers = !this.highlightUsers;
      },
      returnUserClass(user) {
        // Highlight different rows based on user login count
        if (this.pageNumber === 1) {
          if (this.highlightUsers && user.login_count === 0)
            return 'highlight_red';
        }

        if (this.pageNumber === 2) {
          if (this.highlightUsers && user.login_count >= 1) 
            return 'highlight_green'
        }
        
        return 'highlight_white';
      }
    }
  }
</script>

<style scoped>
  table {
    width: 1000px;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px 5px;
    text-align: left;
    border-bottom: 1px solid grey;
  }
  button {
      display: inline-block;
      color: #566573;
      margin: 20px;
      width: 200px;
      height: 35px;
      font-size: 16px;
      border-radius: 5px;
      border-color: black;
      outline: none;
      cursor: pointer;
  }
  .highlight_white {
    background-color: white;
  }
  .highlight_red {
    background-color: #E74C3C;
  }
  .highlight_green {
    background-color: #34BD79;
  }
</style>