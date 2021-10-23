
import { useState } from "react"
import { DatePicker, Form, SelectPicker } from "rsuite"
import {ClientFormModel } from "../../pages/models"

import "./styles.css"

const currencyOptions = [
    {label: "USD", value: "USD"},
    {label: "EUR", value: "EUR"},
    {label: "GBP", value: "GBP"},
]



// document.querySelector(".rs-form").querySelectorAll("input").
// document.querySelector(".rs-form").querySelectorAll("input").forEach((o, i) => { console.log(o.value) })

/**
 * Main data entry form component.
 * @param {useRef} childFormRef Reference object to form
 * @param {Map} childFormValue Map/dictionary object containing form values.
 * @callback childFormSetValue Function to set/update childFormValue
*/
const SimpleForm = ( { childFormRef, childFormValue, childFormSetValue, ...props} ) => {
    const [currencyData, setCurrencyData] = useState(childFormValue.currencyType)
    const [dateValue, setDateValue] = useState(childFormValue.dateValue)

    return (
        <div>
            <Form ref={childFormRef} onChange={childFormSetValue} formValue={childFormValue} model={ClientFormModel}>

                <Form.Group controlId="client-name">
                    <Form.Control name="clientName" placeholder="Client Name" />
                    <Form.HelpText tooltip>Name of client</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="company-name">
                    <Form.Control name="companyName" placeholder="Company Name"  />
                    <Form.HelpText tooltip>Name of Company</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="date-value">
                    <DatePicker 
                        name="dateValue"
                        defaultValue={childFormValue.dateValue}
                        style={{ width: 200 }}
                        value={dateValue}
                        onChange={setDateValue}
                        ref={props.dateElementRef}
                        oneTap
                    />
                </Form.Group>


                <Form.Group controlId="currency-type">
                    <SelectPicker 
                        name="currencyType"
                        size="md"
                        ref={props.currencyElementRef}
                        defaultValue={childFormValue.currencyType}
                        data={currencyOptions}
                        style={{ width: 224 }}
                        onChange={setCurrencyData}
                        value={currencyData}
                    />
                </Form.Group>

            </Form>
        </div>
    )
}

export default SimpleForm