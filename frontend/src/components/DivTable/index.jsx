/* eslint-disable */

import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
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


const DataTable = () => {
    const [fetchError, setFetchError] = useState(null)
    const [fetchData, setFetchData] = useState(null)
    const [keyValues, setKeyValues] = useState([])

    useEffect(() => {
        // clean-up controller
        let isSubscribed = true;

        // Try to communicate with sever API
        fetch(`${apiUrl}${apiEndpoint}`)
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
                <div key={uuidv4()} className="column index">#</div>
                <div key={uuidv4()} className="wrapper text-4">
                    <div key={uuidv4()} className="wrapper text-2">
                        {keyValues.map(item => (
                            <div key={uuidv4()} className="text">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            {fetchData.map((row, rowIndex) => (
                <div className="table-row wrapper">
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

export default DataTable
