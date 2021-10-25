/* eslint-disable */
import { useState } from "react"
import { Container } from "react-bootstrap"

import "./styles.scss"
import Navigation from "../Navigation"
import DivTable from "../DivTable"
import FormDisplay from "../FormDisplay"

const App = () => {
	const [currentRow, setCurrentRow] = useState({})


	return (
		<Container fluid>
			<Navigation headingText="Email Validation App" />
			<FormDisplay currentRowData={currentRow} />
			<DivTable onRowClick={setCurrentRow} />
		</Container>

	)
}

export default App