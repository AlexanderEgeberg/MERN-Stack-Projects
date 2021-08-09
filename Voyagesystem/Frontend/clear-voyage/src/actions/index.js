import axios from 'axios';

export const fetchVessels = () => async dispatch => {

    try {
        let resp = await axios.get('http://localhost:3000/vessels/');
        console.log(resp.data);
        dispatch({type: 'FETCH_VESSELS', payload: resp.data});
    } catch (err) {
        console.log(err);
    }
};

export const fetchVessel = (input) => async dispatch => {

    try {
        let resp = await axios.get(`http://localhost:3000/vessels/${input}/comments`);
        console.log(resp.data);
        dispatch({type: 'FETCH_VESSEL', payload: resp.data});
    } catch (err) {
        console.log(err);
    }
};

export const fetchVoyages = (input,page) => async dispatch => {

    try {
        let resp = await axios.get(`http://localhost:3000/vessels/${input}/voyages?page=${page}&limit=4`);
        console.log(resp.data);
        dispatch({type: 'FETCH_VOYAGES', payload: resp.data});
    } catch (err) {
        console.log(err);
    }
};