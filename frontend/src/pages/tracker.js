import { useParams } from "react-router-dom"
import { Button } from "rsuite"
import { useEffect, useState } from "react"


import FlexTable from "../components/FlexTable"
import InputForm from "../components/InputForm"
// import { dateAsISO8601 } from "../lib/datetime"

import "./styles.css"


const currencyData = [
    {label: "USD", value: "USD", role: ""},
    {label: "EUR", value: "EUR", role: ""},
    {label: "GBP", value: "GBP", role: ""},
]

const defaultCurrency = currencyData ? currencyData[0]["label"] : ""

const defaultForm = {
    clientName: "",
    companyName: "",
    dateValue: new Date(),
    currencyType: "",    
}

const Tracker = () => {
    // @ts-ignore Property does not exist on type {}
    let { sid } = useParams()

    const [formData, setFormData] = useState({
        clientName: "",
        companyName: "",
        dateValue: new Date(),
        currencyType: defaultCurrency,    
    })

    /**
     * Just for checking form data.  Only first on change in form data.
    */
    useEffect(() => {
        console.log(formData)
    }, [formData])



    const postData = () => {
        fetch("http://localhost:3000/api", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => {
            console.log(e)
        })
    }

    const handleSubmit = () => {
        if (sid === null) return
        formData["sidValue"] = sid
        const toPost = formData
        setFormData(defaultForm)
        postData()
        console.log(toPost, " -> Data Posted")
    }

    return (
        <div>  
            <main>

                <div className="tracker-header tracker-container">
                    <Button color="orange" appearance="ghost" onClick={handleSubmit} type="submit">Send</Button>
                    <p className="sid-value">{sid ? sid : "No ID detected."}</p>
                </div>

                <div className="tracker-body tracker-container">
                    <InputForm 
                        childFormValue={formData}
                        setChildFormValue={setFormData}
                        currencyOptions={currencyData}
                    />
                    {/* <SimpleForm 
                        childFormRef={formRef}
                        childFormValue={formData}
                        childFormSetValue={setFormData}
                        currencyElementRef={currencyRef}
                        dateElementRef={dateRef}
                    /> */}

                </div>
                <div className="tracker-table tracker-container">
                    <FlexTable /> 
                </div>
            </main>
        </div>
    )
};

export default Tracker