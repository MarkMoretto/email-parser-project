
import {forwardRef} from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
  } from "react-router-dom"
import BrandLogo from "./components/BrandLogo"
import { Navbar, Nav } from "rsuite"
import { v4 as uuidv4 } from "uuid"

// Pages
import Home from "./pages/home"
import Tracker from "./pages/tracker"

// Navigation menu items
export const navItems = [
	{ pageTitle: "Home", pageUrl: "/" },
	{ pageTitle: "Tracker", pageUrl: "/tracker" },	
]

// Navigation link wrapper.
const NavLink = forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
));


const App = () => {
	return (
		<Router>
			<Navbar>
				<Navbar.Brand href="https://www.kroll.com/en" target="_blank">
					<BrandLogo />
				</Navbar.Brand>
				<Nav>
					{navItems.map((obj, i) => {
						return (
						<Nav.Item key={`nav-${i}`} as={NavLink} href={obj.pageUrl} id={`${uuidv4()}`}>
							{obj.pageTitle}
						</Nav.Item>	
					)					
					})}
				</Nav>
			</Navbar>

			{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/tracker/:sid?">
					<Tracker />
				</Route>
				<Route path="/">
					<Home />
				</Route>
				<Redirect to="/" />
			</Switch>			
		</Router>
	)
}


export default App;
