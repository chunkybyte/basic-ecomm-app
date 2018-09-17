const rootReducer = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_ITEM':
            return { ...state, data: [ ...state.data, { ...action.payload, "id": `P00${state.data.length + 1}` } ] };
        default: 
            return state;
    }
};

export default rootReducer;