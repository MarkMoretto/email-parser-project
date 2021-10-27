/* eslint-disable */
import { useState } from "react"
import { Container } from "react-bootstrap"

import "./styles.css"
import "../../static/css/styles.css"
// import "./styles.css"

import Navigation from "../Navigation"
import DataTable from "../DataTable"
import FormDisplay from "../FormDisplay"

/**
 * Main App entry component.
*/
const App = () => {
	// Holds currentRow value following click on DataTable.
	const [currentRow, setCurrentRow] = useState({})

	return (
		<Container fluid>
			<Navigation headingText="Email Validation App" />
			<FormDisplay currentRowData={currentRow} />
			<DataTable onRowClick={setCurrentRow} />
		</Container>

	)
}

export default App