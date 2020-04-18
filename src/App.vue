<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'sign-up' }">Sign Up</router-link> 
           
          <router-link :to="{ name: 'create' }">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(./assets/vuepic.jpg);
	height: 100vh;
	background-size: cover;
	background-position: center;
	font-family: 'Poppins', sans-serif;


}

#nav {
  padding: 30px;
  float: right;
  list-style-type: none;
    margin-top: 5px;
    padding-top: 2%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border: 1px solid transparent;
    transition: 0.6s ease;
  
  
}
#nav a.router-link-exact-hover{
  background-color: #fff;
	color: #000;

}
#nav a.router-link-exact-active {
  background-color: #fff;
	color: #000;

}
</style>
