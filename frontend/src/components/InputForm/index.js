import { DatePicker, Input, InputPicker } from "rsuite"
import "./styles.css"


const InputForm = ({ childFormValue, setChildFormValue, currencyOptions, ...props }) => {
    const defaultCurrencyValue = currencyOptions ? currencyOptions[0]["label"]: ""

    const handleChange = (value, e) => {
        // console.log(value, "\t", e.target.name, "\t", e.target.value)
        setChildFormValue(prevData => {
            return {
                ...prevData,
                [e.target.name]: value
            }
        })
        // console.log(childFormValue)
    }

    const handleDateChange = (value, event) => {
        // console.log(value, "\t", item, "\t", event)
        setChildFormValue(prevData => {
            return {
                ...prevData,
                dateValue: value
            }
        })           
    }

    const onPickerSelect = (value, item, event) => {
        // console.log(value, "\t", item, "\t", event)
        setChildFormValue(prevData => {
            return {
                ...prevData,
                currencyType: value
            }
        })           
    }

    return (
        <div className="form-group">
            {/* Client name element. */}
            <div className="input-item text-input">
                <Input 
                    name="clientName"
                    placeholder="Client Name"
                    onChange={handleChange}
                />
            </div>

            {/* Company name element. */}
            <div className="input-item text-input">
                <Input 
                    name="companyName"
                    placeholder="Company Name"
                    onChange={handleChange}
                />
            </div>

            {/* Date input element. */}
            <div className="input-item date-picker">
                <DatePicker 
                    name="dateValue"
                    defaultValue={new Date()}
                    onChange={handleDateChange}
                    oneTap
                />
            </div>

            {/* Currency select element. */}
            <div className="input-item currency-picker">
                <InputPicker 
                    name="currencyType"
                    labelKey="label"
                    id="currency_type"
                    defaultValue={defaultCurrencyValue}
                    data={currencyOptions}
                    onSelect={onPickerSelect}
                />    
            </div>

        </div>
    )

}

export default InputForm