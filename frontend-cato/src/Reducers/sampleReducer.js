
export default function SampleReducer(state = [], action) {

    switch (action.type) {
        case 'SAMPLE-ACTION':
            return {...state, list: action.payload };
        default:
            return state 
    }
};
