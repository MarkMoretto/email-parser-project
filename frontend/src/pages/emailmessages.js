import { useEffect, useState } from "react"
import { UseFetch } from "../lib/hooks"

import "./styles.css"

const apiUrl = "http://localhost:8000/"
const messagesUrl = `${apiUrl}messages`

const EmailMessages = () => {
    const [fetchError, setFetchError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // const apiOptions = {
    //     method: "GET",
    //     header: {
    //         "Accept": "application/json"
    //     }
    // }
    // const { data, error, isLoading } = UseFetch(messagesUrl, apiOptions)

    useEffect(() => {
        fetch(messagesUrl)
        .then(res => res.json())
        .then((jsonData) => {
            setIsLoaded(true)
            setItems(jsonData)
        },
        (error) => {
            setIsLoaded(true)
            setFetchError(error)
        }
        )
    })

    return (
        <div>  
            <main>
                {items.length === 0 && isLoaded && "Data is loading..."}
                {items.length === 0 && fetchError && `Error: ${fetchError}`}
                {items.length > 0 && items["messages"].map((q, i) => {
                    return (
                        <div key={`message-${i}`}>{q}</div>
                    )
                })}

            </main>
        </div>
    )    
}

export default EmailMessages