function Button({ onClick, onMouseEnter, onMouseLeave, children}) {
    return (
        <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>

            {children}
        </button>
    )
}

export default Button