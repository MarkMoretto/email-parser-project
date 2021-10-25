/* eslint-disable */

import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { v4 as uuidv4} from "uuid"

import "./styles.scss"


/**
 * Base URL for API.
 * @constant
*/
const apiUrl = "http://localhost:8000/"

/**
 * Endpoint to use for retrieving data.
 * @constant
*/
const apiEndpoint = "messages"


/**
 * Helper function to set keys in an array when data updates.
 * @param {Array} obj Array of mapped data.
*/
const getObjKeys = obj => Object.keys(obj)

/**
 * Optional arguments to pass to fetch.
 * @constant
*/
const fetchOptions = {}


/**
 * Table component to display parsed JSON data.
 * @param {Event} onRowClick Pass-thru event from parent component
 * to capture row data.
*/
const DivTable = ({ onRowClick }) => {
    const [fetchError, setFetchError] = useState(null)
    const [fetchData, setFetchData] = useState(null)
    const [keyValues, setKeyValues] = useState([])

    useEffect(() => {
        // clean-up controller
        let isSubscribed = true;

        // Try to communicate with sever API
        fetch(`${apiUrl}${apiEndpoint}`, fetchOptions)
            .then(response => response.json())
            .then(data => isSubscribed ? setFetchData(data["messages"]) : null)
            .catch(err => isSubscribed ? setFetchError(err) : null)

        // cancel subscription to useEffect
        return () => (
            isSubscribed = false
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (fetchData) {
            setKeyValues(getObjKeys(fetchData[0]).filter(item => item !== "file_name"))
        }
    }, [fetchData])

    return (
        <div className="table-container">
        {fetchData && 
            <Container fluid>
            <div key={uuidv4()} className="table-row wrapper header">
                <div key={uuidv4()} className="column index row-item">#</div>
                <div key={uuidv4()} className="wrapper text-4">
                    <div key={uuidv4()} className="wrapper text-2">
                        {keyValues.map(item => (
                            <div key={uuidv4()} className="text row-item">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            {fetchData.map((row, rowIndex) => (
                <div key={uuidv4()} className="table-row wrapper" onClick={() => onRowClick(row)}>
                    <div key={uuidv4()} className="column index index-row">{rowIndex}</div>
                    <div key={uuidv4()} className="wrapper text-4">
                        <div key={uuidv4()} className="wrapper text-2">
                            {keyValues.map(k => (
                                <div key={uuidv4()} className="text" title={row[k]}>{row[k]}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))} 
            </Container>            
            }
        </div>
    )
}

export default DivTable
