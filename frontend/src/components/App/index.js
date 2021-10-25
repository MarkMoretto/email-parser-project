/* eslint-disable */
import { Container } from "react-bootstrap"

import "./styles.scss"
import Navigation from "../Navigation"
import DataTable from "../DataTable"

const App = () => {
	return (
		<Container>
			<Navigation headingText="Email Validation App" />
			<DataTable />
		</Container>

	)
}

export default App