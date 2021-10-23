import { FunctionComponent } from "react"

/**
 * BrandLogo component
 * @param {number} logoWidth - Width of viewBox
 * @param {number} logoHeight - Height of viewBox
 * @param {number} scaleRatio - Size of logo vs. viewBox
 * @param {Map} translateCoords - Map of X and y coords for moving the logo across and
 * 									down a display area.
 */
 const BrandLogo: FunctionComponent<BrandLogoProps>  = ({ logoWidth = 80, logoHeight = 20, ...props }) => {
    return (
        <svg version="1.1" 
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
            width={`${logoWidth}`}
            height={`${logoHeight}`}
            viewBox={`0 0 ${logoWidth} ${logoHeight}`}
		>
        <title>Kroll</title>
            <defs>
                <g id="Aspect_Ratio" data-name="Aspect Ratio" transform={`scale(0.3)`}>
                    <path fill="#14487f" d="M0,287.16V12H54.66V130.77L166.16,12h68.05l-127.78,131L246.88,287.16H172.67L54.66,161.9V287.16Z"></path>
                    <path fill="#14487f" d="M859.08,287.16V12h55.39V241.9H1039v45.26Z"></path>
                    <path fill="#14487f" d="M1084.6,287.16V12H1140V241.9h124.53v45.26Z"></path>
                    <path fill="#14487f" d="M282,287.16V12h90.5q31.5,0,54.3,10.86t35.12,30.77q12.3,19.92,12.31,47.42,0,25.34-12.67,44.35A94.36,94.36,0,0,1,429,175.66l72.39,111.5h-61.9l-57.92-97.74H334.52v97.74ZM365.29,53.67H334.52v94.12h29q56.83,0,56.84-47.06T365.29,53.67Z"></path>
                    <path fill="#43b049" d="M523.57,101.81l221.66-76.9s-53.51-41.22-128-17.61C617.27,7.3,548.21,26.37,523.57,101.81Z"></path>
                    <path fill="#14487f" d="M517.1,134.46l179.27,155.1s-74.26,21-134.16-36.61C562.21,253,511,210.08,517.1,134.46Z"></path>
                    <path fill="#14487f" d="M768.57,44.47,723.25,280.56s65.16-24.91,83-101.08C806.28,179.48,827.12,105.89,768.57,44.47Z"></path>
                </g>
            </defs>
            <use xlinkHref="#Aspect_Ratio" transform="scale(0.21)" />
        </svg>
    )
}

export default BrandLogo