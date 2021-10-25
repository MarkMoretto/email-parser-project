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
        <Container className="table-container">
        {fetchData && 
            <Table striped bordered hover size="sm" responsive="lg"> 
                <thead>
                    <tr key={uuidv4()}>
                        <th key={uuidv4()} style={{width: "30px"}}>#</th>
                        {keyValues.map(item => (
                            <th key={uuidv4()}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {fetchData.map((row, rowIndex) => (
                        <tr key={uuidv4()}>
                            <td key={uuidv4()}>{rowIndex}</td>
                            {keyValues.map(k => (
                                <td key={uuidv4()}>{row[k]}</td>          
                            )) }
                        </tr>
                    ))} 
                </tbody>  
                    
            </Table>}
        </Container>
    )
}

export default DataTable