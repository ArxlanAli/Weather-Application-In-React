import React, { Component } from 'react';
import TitleComponenet from "./Components/Title"


//const apiKey = "a7a7ca9afbf7705c1e13ff5a5dcf6193"

class App extends Component {


  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
  }


  getWeather = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log(city,country);
    if(city && country){
      const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=a7a7ca9afbf7705c1e13ff5a5dcf6193&unites=metric";
      const apiCall = await fetch(apiUrl);
      const data = await apiCall.json();
      console.log(data);
      console.log(data.name);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      });
    }else{
      this.setState({
        error:"Please give Value"
      })
    }
    
  }
  
  render(){
    return(
      <div>
        <TitleComponenet getWeather= {this.getWeather} temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description}/>
        Error:{this.state.error}
      </div>
    );
  };
}

export default App;
