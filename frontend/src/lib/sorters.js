

// Array of maps/dictionaries
export const sortDictAsc = (dataObj, keyValue) => dataObj.sort((a, b) => b[keyValue] <= a[keyValue])
export const sortDictDesc = (dataObj, keyValue) => dataObj.sort((a, b) => a[keyValue] <= b[keyValue])

// Numerical values
export const sortNumAsc = (dataObj) => dataObj.sort((a, b) => a - b)
export const sortNumDesc = (dataObj) => dataObj.sort((a, b) => b - a)