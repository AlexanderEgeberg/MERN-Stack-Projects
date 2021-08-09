import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/VesselList.css";



class CommentList extends Component {

    renderList() {
        if (this.props.vessel)
        {
            return this.props.vessel.comments.map(comment => { 
                return  (
                    <div key={comment._id} className="card" style={{width: "18rem"}}>
                        <h5>{comment.author}</h5>
                        <p>{comment.description}</p>
                        <p>Posted: {comment.creationDate}</p>
                    </div>
                    
                ) 
            })
        }
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { 
        vessel: state.vessel
     };
}
  
export default connect(mapStateToProps)(CommentList);
