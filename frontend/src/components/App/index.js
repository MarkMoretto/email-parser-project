/* eslint-disable */
import { Container } from "react-bootstrap"

import "./styles.scss"
import Navigation from "../Navigation"
import DataTable from "../DataTable"
import DivTable from "../DivTable"

const App = () => {
	return (
		<Container fluid>
			<Navigation headingText="Email Validation App" />
			<DivTable />
		</Container>

	)
}

export default App