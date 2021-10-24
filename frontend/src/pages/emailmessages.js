import { useEffect, useState } from "react"
import { Table } from "rsuite"
import {v4 as uuidv4 } from "uuid"

import "./styles.css"

const apiUrl = "http://localhost:8000/"
const messagesUrl = `${apiUrl}messages`


const EmailMessages = () => {
    const [fetchError, setFetchError] = useState(null)
    const [fetchData, setFetchData] = useState(null)
    const [keyValues, setKeyValues] = useState([])
    const [currentRowData, setCurrentRowData] = useState({})

    const { Cell, Column, HeaderCell } = Table

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

    useEffect(() => {
        console.log(currentRowData)
    }, [currentRowData])

    const CompactCell = props => <Cell {...props} style={{ padding: 4 }} />

    return (
        <div>
        {fetchError && `Error: ${fetchError.message}`}
        {fetchData && 
            <Table
                height={800}
                data={fetchData}
                onRowClick={d => {
                    setCurrentRowData(d)
                }}
            >
                <Column width={300} align="left" fixed>
                    <HeaderCell>To</HeaderCell>
                    <CompactCell dataKey="To" />
                </Column>
                <Column flexGrow={1} align="left">
                    <HeaderCell>From</HeaderCell>
                    <CompactCell dataKey="From" />
                </Column>
                <Column flexGrow={1} align="center">
                    <HeaderCell>Date</HeaderCell>
                    <CompactCell dataKey="Date" />
                </Column>        
                <Column flexGrow={2} align="left">
                    <HeaderCell>Subject</HeaderCell>
                    <CompactCell dataKey="Subject" />
                </Column>
                <Column flexGrow={1} align="left">
                    <HeaderCell>Message-ID</HeaderCell>
                    <CompactCell dataKey="Message-ID" />
                </Column>            
            </Table>
        }
        </div>
    )
}

export default EmailMessages