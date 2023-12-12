<template >
    <body>
    <div class="bob">
        <h1>Welcome to my Portfolio</h1>
        <p>My name is Jodi Abrahams, <br>An aspiring Web Developer <br>
            
        and Technician</p>
    </div>

    <button class="chad">About me</button>

</body>
</template>
<script>
export default {
    name: "PortHome"
}
</script>
<style>
    body{
   background: black;  
    }
.bob{
    padding-top: 20px;
  
}
    p{
        color: aliceblue;
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
h1{
    color: aliceblue;
    text-align: left;
    justify-content: center;
}

.chad {
    display: flex;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: white;
    border-radius: 40px;
    white-space: nowrap;
    border: none;
    background: rgb(20, 20, 20);
    box-shadow: 0 0 10px rgba(153, 0, 255, 0.5); /* Neon glow effect */
    transition: all 0.3s ease;
    margin-left: 30px;
}

/* Hover effect for the neon button */
.chad:hover {
    background: #22003f; /* Darker blue on hover */
    box-shadow: 0 0 20px rgba(115, 0, 255, 0.8); /* Enhanced neon glow on hover */
}


</style>