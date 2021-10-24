/**
 * Add n days to a given date.
*/
export const AddDays = (date, numDays) => {
    let outputDt = new Date(date)
    outputDt.setDate(outputDt.getDate() + numDays)
    return outputDt
}


export const dateAsISO8601 = (dateValue) => {
    return dateValue.toJSON().split("T")[0]
}
