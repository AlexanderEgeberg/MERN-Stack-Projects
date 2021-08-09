import { combineReducers } from 'redux';
import vesselsReducer from './vesselsReducer';
import vesselReducer from './vesselReducer';
import voyagesReducer from './voyagesReducer';
//import more here




export default combineReducers( {
    vessels: vesselsReducer,
    vessel: vesselReducer,
    voyages: voyagesReducer,
    //add more here
});