/* eslint-disable */
import { 
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider    
} from "@blueprintjs/core"


const Navigation = ({ headingText }) => {
    return (
        <Navbar className={Classes.DARK}>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>
                    {headingText ? headingText : "App"}
                </NavbarHeading>
                <NavbarDivider />
                <AnchorButton
                    href="https://www.validity.com/"
                    text="Validity"
                    target="_blank"
                    minimal
                    rightIcon="share"
                />
                <AnchorButton
                    href="http://github.com/palantir/blueprint"
                    text="Github"
                    target="_blank"
                    minimal
                    rightIcon="code"
                />
            </NavbarGroup>
        </Navbar>   
    )
}

export default Navigation