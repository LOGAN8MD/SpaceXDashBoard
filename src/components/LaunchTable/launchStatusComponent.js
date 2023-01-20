import React from "react";
import './launchStatus.css'
function LaunchStatusComponent({ upcoming, success }) {
    // console.log(upcoming, success)
    if (upcoming === true && success === null) {
        return (
            <div className={["launchCode", "upcomingColor"].join(' ')}>
                Upcoming
            </div>
        )
    }
    else if (success === true) {
        return (
            <div className={["launchCode", "successColor"].join(' ')}>
                Success
            </div>
        )
    } else {
        return (
            <div className={["launchCode", "failedColor"].join(' ')}>
                Failed
            </div>
        )

    }
}
export default LaunchStatusComponent;