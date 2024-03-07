console.log("Helool ji");

const API_KEY  = ""

async function showWeather(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city = "goa";


    const response = await  fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}');

    const data = (await response).json();

    console.log("Weather data:->" + data);
}