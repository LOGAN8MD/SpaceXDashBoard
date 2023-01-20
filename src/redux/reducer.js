import TYPES from './type';
import moment from 'moment';


const initialState = {
    range: {
        startDate: moment().subtract(7, 'days'),
        endDate: moment()
    },
    launchStatus: {
        launchText: 'All Launches',
        launchIndex: 0
    }
    
}

const launchFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_DATE_RANGE: return {
            ...state, ...action.payload
        }
        case TYPES.ADD_LAUNCH_STATUS: return {
            ...state, ...action.payload
        }
        default: return state
    }
}
export default launchFilterReducer