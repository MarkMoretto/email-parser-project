/* eslint-disable */

import { Container, Image, Nav, Navbar } from "react-bootstrap"
import BrandLogo from "../BrandLogo"
import "./styles.css"


const Navigation = ({ headingText, ...props }) => {
    return (
            <Navbar className="nav-bar-1 bg-nav-main" expand="md" {...props}>
                <Navbar.Brand href="https://www.validity.com/" target="_blank" rel="noreferrer">
                    <BrandLogo brandName="Validity" width="125" height="60" /> 
                </Navbar.Brand>
            </Navbar> 
    )
}

export default Navigation