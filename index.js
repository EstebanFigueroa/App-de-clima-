const onLoad = () => { //Esta función se ejecuta cuando se lee el body del HTML
    navigator.geolocation.getCurrentPosition(tomarData) //Tomamos la localización 
}
const tomarData = position => { //Reciba la data del usuario
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&lang={sp, es}&appid=${apiclima}&`) //Con Fetch de javascript llamamos a la api
        .then(response => response.json()) // Aca devolvemos la info de la api como json 
        .then(data => setWeatherData(data)) //metemos data dentro de una funcion
}
const setWeatherData = data => {
    const dataClima = {
        location: data.name,
        date: fecha(),
        description: data.weather[0].main,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        pressure: data.main.pressure,
         //vamos a obtener la fecha con javascript
    } //Ahora tenemos que iterar nuestro objeto dataClima e imprimir en los divs que construimos en el esqueleto HTML
    //Este forEach lo que hace es recorrer nuestro objeto y devolvernos las key(Las key en el objeto clima son las propiedades)
    Object.keys(dataClima).forEach(key => {
        document.getElementById(key).textContent = dataClima[key]
    });
}
const fecha=()=>{
    let fecha = new Date() //Acá obtenemos la fecha con javascript
    return `${fecha.getDate()}-${fecha.getMonth() +1}-${fecha.getFullYear()}`
}
const apiclima = "b25139c039a810b533b1a12128b80214"
