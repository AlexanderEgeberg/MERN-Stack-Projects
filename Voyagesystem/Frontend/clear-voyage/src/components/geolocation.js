import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng }) => <div>{lat} {lng}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        zoom: 11
      };
  
  componentDidMount() {
    console.log(this.props.coord)
}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBuD1G13uJAf4yFDfMsxtSAuxHr6Wi7VIc' }}
          defaultCenter={this.props.coord}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.coord[0]}
            lng={this.props.coord[1]}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;