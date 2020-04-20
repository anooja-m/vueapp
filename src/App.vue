<template>

  <div id="app">

    <div id="nav">    
      <router-link :to="{ name: 'home', params: { homepage: 'together' }  }">Home</router-link>
           <router-link :to="{ name: 'sign-up' }">Sign Up</router-link> 
           <router-link :to="{ name: 'food-show' }">foodShow</router-link>
           <router-link :to="{ name: 'login' }">Login</router-link>     
    </div>
    <router-view />	
    <form>
      <label>enter a number</label>
    <input v-model="num1" type="text"/>
    <br/>
    <label>enter 2 nd number</label>
    <input v-model="num2" type="text"/>
    <br>
     <button type="submit">Add</button>
    </form>
  <div>
    {{num1}}
  </div>
  </div>
</template>
<script>
export default {
  data:() => ({     
num1=0,
num2=0    
  })

};
</script>

  
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
