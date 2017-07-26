//S5T66: using a google map to replace the city names
import React, { Component } from 'react';

class GoogleMap extends Component{
  //S5T67: componentDidMount() method is called automatically once the component is mounted on the screen
  componentDidMount(){
    //S5T67: new GoogleMap.maps.Map this is how we create an embeded googlemap inside of our document
    //this.refs.map tells the googlemap where on the screen it should render the googlemap into. in
    //other words, this.refs.map tells a position to googlemap so that googlemap knows where to put
    //the map to
    //This is the general way how we do a lot of interaction between third party libraries that do not really 
    //know how to work in a react ecosystem because they do not know what the render function or jsx is.
    new google.maps.Map(this.refs.map, {
      zoom: 12, 
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render(){
    return <div ref="map" />;
  }
}

export default GoogleMap;