import { useEffect, useState } from "react"


export const UseFetch = ({ url, options }) => {
    const [fetchedData, setFetchedData] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const runFetch = async() => {
            setIsLoading(true)
            try {
                const result = await fetch(url, options)
                const jsonData = await result.json()
                setFetchedData(jsonData)
                setIsLoading(false)
            } catch (error) {
                setFetchError(error)
            }
        }
        runFetch()
    }, [])
    return { fetchedData, fetchError, isLoading }
}