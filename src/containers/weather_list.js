//S5T61
import React, { Component } from 'react';
//S5T62
import { connect } from 'react-redux';
/*
refactored in S5T64
//S5T63: after install react-sparklines using npm install --save react-sparklines. import it here
import { Sparklines, SparklinesLine } from 'react-sparklines';
*/
//S5T64
import Chart from '../components/chart';
//S5T67
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  //S5T62
  renderWeather(cityData){
    //S5T63: create a temps array to store all the temperatures from the cityData. 
    //temps array is going to be used in make graphs
    //the graphs are made by using react-sparklines package which can be installed using npm
    const temps = cityData.list.map(weather => weather.main.temp);
    //S5T65:
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    //S5T67:
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    //or use ES6 syntax
    //const { lon, lat } = cityData.city.coord;

    return(
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={ lon } lat={ lat }/></td>
        <td>
          <Chart data={temps} color="orange" units="K"/> 
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPa"/> 
        </td>
        <td>
          <Chart data={humidity} color="black" units="%"/> 
        </td>
      </tr>
    );
  }


  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {//use map() function to iterate every element in this.props.weather list
          //So, the following line means, for each of the element in this.props.weather 
          //list, call this.renderWeather function
          this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    );
  }
}

//S5T62
function mapStateToMap(state){
  return { weather: state.weather };
}
//S5T62
export default connect(mapStateToMap)(WeatherList);