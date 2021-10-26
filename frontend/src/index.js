/* eslint-disable */
import { StrictMode } from "react"
import { render } from "react-dom"

// Main app
import App from "./components/App"

// Main css
import "bootstrap/dist/css/bootstrap.min.css"

// eslint-disable-next-line
render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
)
