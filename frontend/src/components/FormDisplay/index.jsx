/* eslint-disable */
import { Form } from "react-bootstrap"
import { v4 as uuidv4} from "uuid"

import "./styles.css"
import "../../static/css/styles.css"

/**
 * Form component to display row items when clicked.
*/
const FormDisplay = ({ currentRowData, ...props}) => {
    return (
        <div key={uuidv4()} className="form-container">

            <Form.Group className="mb-3 sm-text" controlId="formFieldTo">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" name="To" readOnly value={currentRowData ? currentRowData.To : "" } />
            </Form.Group>

            <Form.Group className="mb-3 sm-text" controlId="formFieldFrom">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" name="From" readOnly value={currentRowData ? currentRowData.From : "" }  />
            </Form.Group>                

            <Form.Group className="mb-3 sm-text" controlId="formFieldDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" name="Date" readOnly rows={2} value={currentRowData ? currentRowData.Date : "" }  />
            </Form.Group>

            <Form.Group className="mb-3 lg-text" controlId="formFieldSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="textarea" wrap="soft" name="Subject" readOnly value={currentRowData ? currentRowData.Subject : "" }  />
            </Form.Group>

            <Form.Group className="mb-3 lg-text" controlId="formFieldMessageId">
                <Form.Label>Message-ID</Form.Label>
                <Form.Control type="text" name="Message-ID" readOnly value={currentRowData ? currentRowData["Message-ID"] : "" }  />
            </Form.Group>

        </div>
    )
}

export default FormDisplay
