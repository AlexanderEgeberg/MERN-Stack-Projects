import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchVessel, fetchVoyages } from '../actions';
import "../css/VesselList.css"
import VoyageList from './VoyageList';
import CommentList from './CommentList';
import VesselModal from './VesselModal';
import Axios from 'axios';


class Vessel extends Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
        this.state = {page: 1};
      }

    async componentDidMount() {
        //console.log(this.props.match.params.id);
        await this.props.fetchVessel(this.props.match.params.id);
        await this.props.fetchVoyages(this.props.match.params.id, this.state.page);
        this.setState({
            loaded: true
        });
      }
      componentWillUnmount() {
        this.setState({
            loaded: false
        })
    }

    PostVoyage = async (name,description,image) => {

        let url = `http://localhost:3000/vessels/${this.props.match.params.id}/voyages`;
    
        await Axios.post(url, {
            name: name,
            description: description,
            image: image
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        await this.props.fetchVoyages(this.props.match.params.id,1);
    };

    NextVoyages = async () => {
      this.state.page++;
      this.props.fetchVoyages(this.props.match.params.id, this.state.page);
    }
    PreviousVoyages = async () => {
      if(this.state.page > 1){
        this.state.page--;
      }
      this.props.fetchVoyages(this.props.match.params.id, this.state.page);
    }
    numberVoyages = async (number) => {
      await this.setState({
        page: number
    });
      this.props.fetchVoyages(this.props.match.params.id, this.state.page);
    }
      
    render() {
        return (
            <div>
                <h2 >Voyages <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Add voyage</button></h2>
                {this.state.loaded && this.props.voyages ? <VoyageList /> : "Not loaded yet"}
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item"><p className="page-link" onClick={this.PreviousVoyages}>Previous</p></li>
                    <li className="page-item"><p className="page-link" onClick={ () => {this.numberVoyages(1)}}>1</p></li>
                    <li className="page-item"><p className="page-link" onClick={ () => {this.numberVoyages(2)}}>2</p></li>
                    <li className="page-item"><p className="page-link" onClick={ () => {this.numberVoyages(3)}}>3</p></li>
                    <li className="page-item"><p className="page-link" onClick={this.NextVoyages}>Next</p></li>
                  </ul>
                </nav>
                {this.state.loaded && this.props.vessel ? <VesselModal PostVoyage = {this.PostVoyage} /> : ""}
                <h2>Comments</h2>
                {this.state.loaded && this.props.vessel ? <CommentList /> : "Not loaded yet"}
            </div>
        )
    }
}
  
const mapStateToProps = state => {
    return { 
        vessel: state.vessel,
        vessels: state.vessels,
        voyages: state.voyages 
    };
  }
  
export default connect(mapStateToProps, {fetchVessel, fetchVoyages})(Vessel);