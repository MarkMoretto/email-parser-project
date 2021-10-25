/* eslint-disable */
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { v4 as uuidv4} from "uuid"


const apiUrl = "http://localhost:8000/"
const messagesUrl = `${apiUrl}messages`


const DataTable = () => {
    const [fetchError, setFetchError] = useState(null)
    const [fetchData, setFetchData] = useState(null)
    const [keyValues, setKeyValues] = useState([])

    useEffect(() => {
        // clean-up controller
        let isSubscribed = true;

        // Try to communicate with sever API
        fetch(messagesUrl)
            .then(response => response.json())
            .then(data => isSubscribed ? setFetchData(data["messages"]) : null)
            .catch(err => isSubscribed ? setFetchError(err) : null)

        // cancel subscription to useEffect
        return () => (
            isSubscribed = false
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getObjKeys = obj => {
        return Object.keys(obj)
    }

    useEffect(() => {
        if (fetchData) {
            setKeyValues(getObjKeys(fetchData[0]).filter(item => item !== "file_name"))
        }
    }, [fetchData])
    // useEffect(() => {
    //     console.log(fetchData)
    // }, [fetchData])

    return (
        <div>
        {fetchData && 
            <Table responsive> 
                <thead>
                    <tr key={uuidv4()}>
                        <th key={uuidv4()}>#</th>
                        {keyValues.map((item, index) => (
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
        </div>
    )
}

export default DataTable