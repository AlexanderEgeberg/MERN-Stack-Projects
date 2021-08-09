import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchVessels } from '../actions';
import VesselList from './VesselList';

class Home extends Component {


  componentDidMount() {
    if (!Array.isArray(this.props.vessels) || !this.props.vessels.length)
    {
      this.props.fetchVessels();
    }
  }

  render() {
    return (
      <div>
      <h1>Homepage</h1>
      <VesselList />

    </div>
    );
  }
}

const mapStateToProps = state => {
  return { vessels: state.vessels };
}

export default connect(mapStateToProps, {fetchVessels})(Home);