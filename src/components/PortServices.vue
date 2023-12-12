<template>
    <div>
      <!-- About section -->
      <div class="about">
        <!-- About section content -->
      </div>
  
      <!-- Services section -->
      <div class="service">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div class="row">
            <!-- Service items -->
            <div v-for="(service, index) in services" :key="index" class="service-item padd-15">
              <div class="service-item-inner">
                <div class="icon">
                  <i :class="service.icon"></i>
                </div>
                <h4>{{ service.title }}</h4>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PortServices",
    mounted() {
    // Add Boxicons link to the head dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://boxicons.com/boxicons/css/boxicons.min.css";
    document.head.appendChild(link);
  },
    data() {
      return {
        services: [
          {
            icon: "bx bx-laptop",
            title: "Web Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          },
          {
            icon: "fas fa-mobile",
            title: "Graphic Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          },
          {
            icon: "fas fa-mobile",
            title: "Graphic Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .service .container {
    padding-bottom: 40px;
  }
  
  .service .service-item {
    margin-bottom: 30px;
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  
  .service .service-item .service-item-inner {
    background-color: var(--bg-black-100);
    border: 1px solid var(--bg-black-50);
    border-radius: 10px;
    padding: 30px 15px;
    text-align: center;
    transition: all 0.35s ease;
  }
  
  .service .service-item .service-item-inner:hover {
    box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
  }
  
  .service .service-item .service-item-inner h4 {
    font-size: 10px;
    margin-bottom: 15px;
    color: aliceblue;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  .service .service-item .service-item-inner p {
    font-size: 16px;
    color: #b49696;
    line-height: 25px;
  }
  </style>
  