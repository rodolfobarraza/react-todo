const IconCheck = ({ stroke = "#FFF", ...props }) => { 
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
            stroke={stroke}
            strokeWidth="2"
            {...props}
        >
            <path
                d="M1 4.304L3.696 7l6-6"
            />
        </svg>
    )
}

export default IconCheck;