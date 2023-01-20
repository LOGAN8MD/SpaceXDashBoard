import TYPES from './type';


const setDateRange = (startDate, endDate) => {
    return {
        type: TYPES.ADD_DATE_RANGE,
        payload: { range: { startDate, endDate } }
    }

}

const setLaunchStatus = (launchIndex, launchText) => {
    return {
        type: TYPES.ADD_LAUNCH_STATUS,
        payload: { launchStatus: { launchText, launchIndex } }
    }

}
const Actions = {
    setDateRange,
    setLaunchStatus
}
export default Actions

