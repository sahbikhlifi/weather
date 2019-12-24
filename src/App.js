import React , {Component} from 'react';
import Form from './component/Form'
import Weather from './component/Weather'
// import axios from 'axios';

const API_KEY = "76c7e85c0bb42609ac26c4042b5592f0";

//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component{

state = {
  temperature : '',
  city : '',
  country  : '',
  humidity  : '',
  description  : '',
  error   : ''

}

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.city.value;
    const country = e.target.country.value;
      console.log("weather" , city, country) 
      const api = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
      // jebet data
      const data = await api.json();
      // convert data to json , await matemchi lel ba3do ela matkml
      console.log(data)
      console.log(data.main.temp)
//       axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
// .then( data => {
            if ( city && country) {
                this.setState ({
                  temperature : data.main.temp,
                  city : data.name,
                  country  : data.sys.country,
                  humidity  :data.main.humidity,
                  description  : data.weather[0].description,
                  error   : ''
                  })
              }else {
                this.setState({
                  temperature : '',
                  city : '',
                  country  : '',
                  humidity  : '',
                  description  : '',
                  error   : 'please enter city and country'

                })
              }

  }


  render(){
    return (
      <div className="wrapper">
      <div className="form-container">
       <Form getWeather={this.getWeather}/>
       <Weather 
                  temperature= {this.state.temperature}  
                  city = {this.state.city}  
                  country   ={this.state.country}  
                  humidity   ={this.state.humidity}  
                  description  ={this.state.description}  
                  error  ={this.state.error}  
       /> 
       </div>
      </div>
    )
  }
}


export default App;
