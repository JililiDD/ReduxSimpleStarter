

import React, { Component } from 'react';
//S5T52
import SearchBar from '../containers/search_bar';
//S5T61:
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
