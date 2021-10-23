import { FunctionComponent } from "react"

import "./styles.css"


/**
 * BrandLogo component
 * @param {number} logoWidth - Width of viewBox
 * @param {number} logoHeight - Height of viewBox
 * @param {number} scaleRatio - Size of logo vs. viewBox
 * @param {Map} translateCoords - Map of X and y coords for moving the logo across and
 * 									down a display area.
 */
 const BrandLogo: FunctionComponent<BrandLogoProps>  = ({ brandName = "validity", logoWidth = 80, logoHeight = 20, ...props }) => {
    return (
        <svg version="1.1" 
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
            width={`${logoWidth}`}
            height={`${logoHeight}`}
            viewBox={`0 0 153.29 37`}
		>
            {brandName ? <title>{brandName}</title> : null}
            <defs>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1" d="M31.73,0h0L22.6,15.82a8.28,8.28,0,0,0,0,8.28L25,28.23,36.5,8.29A5.51,5.51,0,0,0,31.73,0Z"/>
                    <path className="cls-2" d="M26.17,4.14,28.55,0h-23A5.51,5.51,0,0,0,.75,8.29H19A8.29,8.29,0,0,0,26.17,4.14Z"/>
                    <path className="cls-3" d="M23.4,31l-9.13-15.8A8.28,8.28,0,0,0,7.1,11H2.34L13.85,31a5.51,5.51,0,0,0,9.55,0Z"/>
                    <path className="cls-4" d="M45.05,10.48h3.29a.26.26,0,0,1,.25.16L53.8,24l5-13.31a.26.26,0,0,1,.25-.17h3a.26.26,0,0,1,.24.35l-6.7,17.09a.26.26,0,0,1-.24.16H52a.26.26,0,0,1-.24-.16l-7-17.08A.26.26,0,0,1,45.05,10.48Z"/>
                    <path className="cls-4" d="M64.27,12.83a.27.27,0,0,1,0-.38,9.3,9.3,0,0,1,3.07-1.77A11.3,11.3,0,0,1,71.07,10a10.25,10.25,0,0,1,3.32.48,6.59,6.59,0,0,1,2.28,1.3A5,5,0,0,1,78,13.69a5.76,5.76,0,0,1,.43,2.21v9c0,.62,0,1.19,0,1.71s0,.81.08,1.2a.26.26,0,0,1-.26.28H75.84a.25.25,0,0,1-.26-.24c-.06-.81-.13-1.62-.13-2.43h0a6.43,6.43,0,0,1-2.68,2.41,8.85,8.85,0,0,1-5.87.38,5.83,5.83,0,0,1-2-1,4.73,4.73,0,0,1-1.31-1.65,5,5,0,0,1-.49-2.28,5.17,5.17,0,0,1,.76-2.87A5.89,5.89,0,0,1,66,18.52a10.12,10.12,0,0,1,3.09-1,21.36,21.36,0,0,1,3.77-.32H75.3v-.74A3.75,3.75,0,0,0,75,15.08a3.59,3.59,0,0,0-.78-1.21A3.86,3.86,0,0,0,73,13a5,5,0,0,0-1.86-.32,7,7,0,0,0-1.69.19,7.86,7.86,0,0,0-1.32.46A6,6,0,0,0,67,14l-.75.56-.34,0Zm9.25,6.78c-.8,0-1.61.05-2.44.13a9.49,9.49,0,0,0-2.26.51,4.21,4.21,0,0,0-1.67,1A2.31,2.31,0,0,0,66.5,23a2.43,2.43,0,0,0,1,2.19,5,5,0,0,0,2.77.67,5.39,5.39,0,0,0,2.34-.47,4.42,4.42,0,0,0,1.56-1.21A4.63,4.63,0,0,0,75,22.53a6.69,6.69,0,0,0,.26-1.8V19.61Z"/>
                    <path className="cls-4" d="M82,0H84.8a.26.26,0,0,1,.26.26V27.82a.26.26,0,0,1-.26.26H82a.25.25,0,0,1-.26-.26V.26A.26.26,0,0,1,82,0Z"/>
                    <path className="cls-4" d="M115.44,4.16a2.22,2.22,0,0,1,.67-1.6,2.25,2.25,0,0,1,3.2,0,2.18,2.18,0,0,1,.67,1.6,2.18,2.18,0,0,1-.67,1.6,2.25,2.25,0,0,1-3.2,0A2.22,2.22,0,0,1,115.44,4.16Zm.86,6.32h2.82a.26.26,0,0,1,.27.26V27.82a.26.26,0,0,1-.27.26H116.3a.26.26,0,0,1-.26-.26V10.74A.26.26,0,0,1,116.3,10.48Z"/>
                    <path className="cls-4" d="M87.84,4.16a2.18,2.18,0,0,1,.67-1.6,2.25,2.25,0,0,1,3.2,0,2.18,2.18,0,0,1,.67,1.6,2.18,2.18,0,0,1-.67,1.6,2.25,2.25,0,0,1-3.2,0A2.18,2.18,0,0,1,87.84,4.16Zm.86,6.32h2.82a.26.26,0,0,1,.26.26V27.82a.26.26,0,0,1-.26.26H88.7a.25.25,0,0,1-.26-.26V10.74A.25.25,0,0,1,88.7,10.48Z"/>
                    <path className="cls-4" d="M112.48,28.08h-2.84a.26.26,0,0,1-.26-.26V25.56h0a6.55,6.55,0,0,1-2.71,2.19,8.16,8.16,0,0,1-3.47.78,9.35,9.35,0,0,1-3.7-.71,8.17,8.17,0,0,1-2.82-2,8.93,8.93,0,0,1-1.8-2.94,10.23,10.23,0,0,1-.63-3.64,10.42,10.42,0,0,1,.63-3.66,8.58,8.58,0,0,1,1.8-2.93,8.28,8.28,0,0,1,2.82-1.95,9.35,9.35,0,0,1,3.7-.71,8.25,8.25,0,0,1,3.57.8A6.32,6.32,0,0,1,109.38,13h0V.26a.26.26,0,0,1,.26-.26h2.84a.27.27,0,0,1,.27.26V27.82A.26.26,0,0,1,112.48,28.08Zm-8.87-2.67A6,6,0,0,0,106,25a5.18,5.18,0,0,0,1.82-1.27A5.39,5.39,0,0,0,109,21.75a7,7,0,0,0,.41-2.47,7.08,7.08,0,0,0-.41-2.47,5.39,5.39,0,0,0-1.15-1.93A5.16,5.16,0,0,0,106,13.62a6.44,6.44,0,0,0-4.83,0,5.25,5.25,0,0,0-1.82,1.26,5.54,5.54,0,0,0-1.15,1.93,7.65,7.65,0,0,0,0,4.94,5.54,5.54,0,0,0,1.15,1.93A5.28,5.28,0,0,0,101.19,25,6.07,6.07,0,0,0,103.61,25.41Z"/>
                    <path className="cls-4" d="M133.46,13.37h-4.53v8c0,.5,0,1,0,1.47a3.81,3.81,0,0,0,.28,1.3,2.18,2.18,0,0,0,.74.93,2.59,2.59,0,0,0,1.47.35,7.69,7.69,0,0,0,1.23-.11,4.22,4.22,0,0,0,.79-.23.26.26,0,0,1,.36.24v2.47l-.16.24a4.72,4.72,0,0,1-1.39.38,11,11,0,0,1-1.46.13,6.68,6.68,0,0,1-3-.54,3.62,3.62,0,0,1-1.56-1.39,4.42,4.42,0,0,1-.6-1.91c-.06-.71-.09-1.42-.09-2.14V13.37h-3.35a.26.26,0,0,1-.26-.26V10.74a.26.26,0,0,1,.26-.26h3.35V5.8a.26.26,0,0,1,.26-.26h2.82a.25.25,0,0,1,.26.26v4.68h4.53a.26.26,0,0,1,.27.26v2.37A.26.26,0,0,1,133.46,13.37Z"/>
                    <path className="cls-4" d="M136.09,10.48h3.29a.24.24,0,0,1,.24.16l5.19,13.58,5-13.57a.24.24,0,0,1,.24-.17h3a.26.26,0,0,1,.25.35l-8.22,21q-.45,1.15-.93,2.1A6.52,6.52,0,0,1,143,35.59a4.81,4.81,0,0,1-1.61,1,6.31,6.31,0,0,1-2.32.37,12.54,12.54,0,0,1-1.49-.09,5.58,5.58,0,0,1-1.28-.32l-.16-.28.34-2.51a.26.26,0,0,1,.34-.22,5.07,5.07,0,0,0,1.69.3,3.8,3.8,0,0,0,1.31-.2,2.66,2.66,0,0,0,.93-.6,3.31,3.31,0,0,0,.64-.91A11.41,11.41,0,0,0,141.9,31L143,28.2l-7.13-17.36A.26.26,0,0,1,136.09,10.48Z"/>
                    </g></g></svg>
    )
}

export default BrandLogo

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.29 37"><defs><style>.cls-1{fill:#1996ff;}.cls-2{fill:#43c462;}.cls-3{fill:#1951c4;}.cls-4{fill:#071b2b;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M31.73,0h0L22.6,15.82a8.28,8.28,0,0,0,0,8.28L25,28.23,36.5,8.29A5.51,5.51,0,0,0,31.73,0Z"/><path class="cls-2" d="M26.17,4.14,28.55,0h-23A5.51,5.51,0,0,0,.75,8.29H19A8.29,8.29,0,0,0,26.17,4.14Z"/><path class="cls-3" d="M23.4,31l-9.13-15.8A8.28,8.28,0,0,0,7.1,11H2.34L13.85,31a5.51,5.51,0,0,0,9.55,0Z"/><path class="cls-4" d="M45.05,10.48h3.29a.26.26,0,0,1,.25.16L53.8,24l5-13.31a.26.26,0,0,1,.25-.17h3a.26.26,0,0,1,.24.35l-6.7,17.09a.26.26,0,0,1-.24.16H52a.26.26,0,0,1-.24-.16l-7-17.08A.26.26,0,0,1,45.05,10.48Z"/><path class="cls-4" d="M64.27,12.83a.27.27,0,0,1,0-.38,9.3,9.3,0,0,1,3.07-1.77A11.3,11.3,0,0,1,71.07,10a10.25,10.25,0,0,1,3.32.48,6.59,6.59,0,0,1,2.28,1.3A5,5,0,0,1,78,13.69a5.76,5.76,0,0,1,.43,2.21v9c0,.62,0,1.19,0,1.71s0,.81.08,1.2a.26.26,0,0,1-.26.28H75.84a.25.25,0,0,1-.26-.24c-.06-.81-.13-1.62-.13-2.43h0a6.43,6.43,0,0,1-2.68,2.41,8.85,8.85,0,0,1-5.87.38,5.83,5.83,0,0,1-2-1,4.73,4.73,0,0,1-1.31-1.65,5,5,0,0,1-.49-2.28,5.17,5.17,0,0,1,.76-2.87A5.89,5.89,0,0,1,66,18.52a10.12,10.12,0,0,1,3.09-1,21.36,21.36,0,0,1,3.77-.32H75.3v-.74A3.75,3.75,0,0,0,75,15.08a3.59,3.59,0,0,0-.78-1.21A3.86,3.86,0,0,0,73,13a5,5,0,0,0-1.86-.32,7,7,0,0,0-1.69.19,7.86,7.86,0,0,0-1.32.46A6,6,0,0,0,67,14l-.75.56-.34,0Zm9.25,6.78c-.8,0-1.61.05-2.44.13a9.49,9.49,0,0,0-2.26.51,4.21,4.21,0,0,0-1.67,1A2.31,2.31,0,0,0,66.5,23a2.43,2.43,0,0,0,1,2.19,5,5,0,0,0,2.77.67,5.39,5.39,0,0,0,2.34-.47,4.42,4.42,0,0,0,1.56-1.21A4.63,4.63,0,0,0,75,22.53a6.69,6.69,0,0,0,.26-1.8V19.61Z"/><path class="cls-4" d="M82,0H84.8a.26.26,0,0,1,.26.26V27.82a.26.26,0,0,1-.26.26H82a.25.25,0,0,1-.26-.26V.26A.26.26,0,0,1,82,0Z"/><path class="cls-4" d="M115.44,4.16a2.22,2.22,0,0,1,.67-1.6,2.25,2.25,0,0,1,3.2,0,2.18,2.18,0,0,1,.67,1.6,2.18,2.18,0,0,1-.67,1.6,2.25,2.25,0,0,1-3.2,0A2.22,2.22,0,0,1,115.44,4.16Zm.86,6.32h2.82a.26.26,0,0,1,.27.26V27.82a.26.26,0,0,1-.27.26H116.3a.26.26,0,0,1-.26-.26V10.74A.26.26,0,0,1,116.3,10.48Z"/><path class="cls-4" d="M87.84,4.16a2.18,2.18,0,0,1,.67-1.6,2.25,2.25,0,0,1,3.2,0,2.18,2.18,0,0,1,.67,1.6,2.18,2.18,0,0,1-.67,1.6,2.25,2.25,0,0,1-3.2,0A2.18,2.18,0,0,1,87.84,4.16Zm.86,6.32h2.82a.26.26,0,0,1,.26.26V27.82a.26.26,0,0,1-.26.26H88.7a.25.25,0,0,1-.26-.26V10.74A.25.25,0,0,1,88.7,10.48Z"/><path class="cls-4" d="M112.48,28.08h-2.84a.26.26,0,0,1-.26-.26V25.56h0a6.55,6.55,0,0,1-2.71,2.19,8.16,8.16,0,0,1-3.47.78,9.35,9.35,0,0,1-3.7-.71,8.17,8.17,0,0,1-2.82-2,8.93,8.93,0,0,1-1.8-2.94,10.23,10.23,0,0,1-.63-3.64,10.42,10.42,0,0,1,.63-3.66,8.58,8.58,0,0,1,1.8-2.93,8.28,8.28,0,0,1,2.82-1.95,9.35,9.35,0,0,1,3.7-.71,8.25,8.25,0,0,1,3.57.8A6.32,6.32,0,0,1,109.38,13h0V.26a.26.26,0,0,1,.26-.26h2.84a.27.27,0,0,1,.27.26V27.82A.26.26,0,0,1,112.48,28.08Zm-8.87-2.67A6,6,0,0,0,106,25a5.18,5.18,0,0,0,1.82-1.27A5.39,5.39,0,0,0,109,21.75a7,7,0,0,0,.41-2.47,7.08,7.08,0,0,0-.41-2.47,5.39,5.39,0,0,0-1.15-1.93A5.16,5.16,0,0,0,106,13.62a6.44,6.44,0,0,0-4.83,0,5.25,5.25,0,0,0-1.82,1.26,5.54,5.54,0,0,0-1.15,1.93,7.65,7.65,0,0,0,0,4.94,5.54,5.54,0,0,0,1.15,1.93A5.28,5.28,0,0,0,101.19,25,6.07,6.07,0,0,0,103.61,25.41Z"/><path class="cls-4" d="M133.46,13.37h-4.53v8c0,.5,0,1,0,1.47a3.81,3.81,0,0,0,.28,1.3,2.18,2.18,0,0,0,.74.93,2.59,2.59,0,0,0,1.47.35,7.69,7.69,0,0,0,1.23-.11,4.22,4.22,0,0,0,.79-.23.26.26,0,0,1,.36.24v2.47l-.16.24a4.72,4.72,0,0,1-1.39.38,11,11,0,0,1-1.46.13,6.68,6.68,0,0,1-3-.54,3.62,3.62,0,0,1-1.56-1.39,4.42,4.42,0,0,1-.6-1.91c-.06-.71-.09-1.42-.09-2.14V13.37h-3.35a.26.26,0,0,1-.26-.26V10.74a.26.26,0,0,1,.26-.26h3.35V5.8a.26.26,0,0,1,.26-.26h2.82a.25.25,0,0,1,.26.26v4.68h4.53a.26.26,0,0,1,.27.26v2.37A.26.26,0,0,1,133.46,13.37Z"/><path class="cls-4" d="M136.09,10.48h3.29a.24.24,0,0,1,.24.16l5.19,13.58,5-13.57a.24.24,0,0,1,.24-.17h3a.26.26,0,0,1,.25.35l-8.22,21q-.45,1.15-.93,2.1A6.52,6.52,0,0,1,143,35.59a4.81,4.81,0,0,1-1.61,1,6.31,6.31,0,0,1-2.32.37,12.54,12.54,0,0,1-1.49-.09,5.58,5.58,0,0,1-1.28-.32l-.16-.28.34-2.51a.26.26,0,0,1,.34-.22,5.07,5.07,0,0,0,1.69.3,3.8,3.8,0,0,0,1.31-.2,2.66,2.66,0,0,0,.93-.6,3.31,3.31,0,0,0,.64-.91A11.41,11.41,0,0,0,141.9,31L143,28.2l-7.13-17.36A.26.26,0,0,1,136.09,10.48Z"/></g></g></svg>
*/