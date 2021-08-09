const variable = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_VESSELS': return action.payload;
        default: return state; 
    }
 };


export default variable
