const variable = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_VOYAGES': return action.payload;
        default: return state; 
    }
 };


export default variable
