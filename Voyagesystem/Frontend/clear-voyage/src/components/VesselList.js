import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/VesselList.css"
import {Link } from 'react-router-dom';


class VesselList extends Component {

    renderList() {
        return this.props.vessels.map(vessel => {
            return  (
                
                <div key={vessel._id} className="card" style={{width: "18rem"}}  data-toggle="modal" data-target="#exampleModal">
                    <Link to={'/vessel/' + vessel._id}>
                    <img className="card-img-top" src={vessel.image} alt="A vessel" />
                    <div className="card-body">
                        <h5 className="card-title">{vessel.name}</h5>
                        <p className="card-text">{vessel.description}</p>
                    </div>
                    </Link>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Destinations
                        </button>
                        
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {vessel.destinations.map(destination => {
                            return (
                                <li key={destination._id}>
                                    <p className="dropdown-item">CC: {destination.cc} | City: {destination.city} | Port: {destination.port}</p>
                                    <hr />
                                </li>
                                
                            )
                        })}
                        </ul>
                    </div>
                </div>
                
            )  
        })
    }

    render() {
        return (
        <div className="Vessel">
            {this.renderList()}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        vessels: state.vessels 
    };
  }
  
export default connect(mapStateToProps)(VesselList);

