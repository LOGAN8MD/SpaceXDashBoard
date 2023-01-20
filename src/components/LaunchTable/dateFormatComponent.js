import React from "react";
import moment from 'moment';
function DateFormatterComponent({ launchDate }) {
    let responseDate = moment(launchDate).utc().format("DD MMMM YYYY [at] HH:mm");
    return (
        <>
            {responseDate}
        </>
    )
}

export default DateFormatterComponent