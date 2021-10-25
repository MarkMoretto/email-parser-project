/* eslint-disable */
import { StrictMode } from "react"
import { render } from "react-dom"

// Main app
import App from "./components/App"

// Main css
// import "./index.scss"
import "./custom.scss"
// import "./lib/scss"

render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
)
