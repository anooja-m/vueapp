getData(){
let config = {
headers: {
"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
"x-rapidapi-key": "J0Ro1CsdqumshmT7wG8r7qa4SIKjp1jqJHnjsntT9vFj2eaZzk"
}
}
axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php',config).then(response=>{
this.coronaData=response.data
})
},