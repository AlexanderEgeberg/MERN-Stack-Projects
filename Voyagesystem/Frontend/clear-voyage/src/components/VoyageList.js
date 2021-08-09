import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/VesselList.css";
import { fetchVessel } from '../actions';



class VoyageList extends Component {

    renderList() {
        if (this.props.voyages)
        {
            return this.props.voyages.map(voyage => { 
                return  (
                    <div key={voyage._id} className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={voyage.image} alt="A voyage" />
                        <div className="card-body">
                            <h5 className="card-title">{voyage.name}</h5>
                            <p className="card-text">{voyage.description}</p>
                        </div>
                    </div>
                ) 
            })
        }
    }
    render() {
        return (
            <div className= 'Vessel'>
                {this.renderList()}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { 
        voyages: state.voyages
     };
}
  
export default connect(mapStateToProps, {fetchVessel})(VoyageList);
