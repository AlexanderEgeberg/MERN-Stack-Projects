const variable = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_VESSEL': return action.payload;
        default: return state; 
    }
 };


export default variable
