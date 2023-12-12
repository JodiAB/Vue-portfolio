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
          <li><router-link to="/PortServices">Services</router-link></li>
          <li><router-link to="/PortContact">Contact</router-link></li>
      </ul>
      </div>
    </nav>


    <div class="cards">

    </div>
  </template>
  
  <script>
  export default {
    name: 'PortNavbar'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */

  nav {
    background-color: #343333;
    padding: 15px;
    border: 3px solid rgb(50, 4, 50)
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
    color: rgb(86, 87, 138);
    text-decoration: none;
  }

  .cards{

  }
  </style>
  