
import { Container, Footer, Content, Nav, Navbar } from "rsuite"
import BrandLogo from "../BrandLogo"

import "./styles.css"

interface LayoutProps {
	activeKey?: string
	children?: React.ReactNode
}

const pageMap = [
	{pageIndex: 1, pageName: "one"},
	{pageIndex: 2, pageName: "two"},
]

const Layout = ({ activeKey, children }: LayoutProps) => {
    return (
        <Container className="container">
            <Navbar>
                <Nav.Item eventKey="corporate" href="https://www.validity.com" target="_blank" rel="noreferrer">
                    <BrandLogo
                        brandName={`validity`}
                    />
                </Nav.Item>

                <Nav activeKey={activeKey}>
                    <Nav.Item eventKey="home" href="/">
                        Home
                    </Nav.Item>

                    {pageMap.map((pg, ix) => (
                        <Nav.Item key={`${ix}-${pg}`} eventKey={pg.pageName} href={`/${pg.pageName}`}>
                        {`Page ${pg.pageIndex}`}
                        </Nav.Item>					
                    ))}
                </Nav>
            </Navbar>
            <Content>
                {children}
            </Content>
            <Footer>Footer</Footer>
        </Container>        
    )
}

export default Layout