<template>
  
    <nav>
      <div class="logo">
        <router-link to="/">
        <img src="@/assets/logo.png" alt="">
      </router-link>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/PortAbout">About</router-link></li>
          <li><router-link to="/PortProjects">Projects</router-link></li>
          <li><router-link to="/PortContact">Contact</router-link></li>
      </ul>
      </div>
     
    </nav>
  </template>
  
  <script>
  export default {
    name: 'PortNavbar'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  nav {
    background-color: #eee8e8;
    padding: 15px;
  }
  .logo img {
    margin-top: 10px;
    height: 40px; /* Adjust the height as needed */
    display: flex;
    justify-content: left;

  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: right;
    text-align: right;
  }
  
  li {
    margin-right: 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  