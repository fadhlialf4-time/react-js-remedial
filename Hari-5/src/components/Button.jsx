function Button ({ variant, children, onClick }) {
    const variants = {
        primary: 'bg-green-600 text-white border-2 rounded-lg p-3 text-sm sm:bg-green-200 sm:text-base',
        secondary: 'bg-yellow-600 text-black border-2 border-red rounded-lg p-3 text-4xl',
        danger: 'bg-red-300 text-white border-2 border-black rounded-lg p-3 text-2xl'
    }
    return (
        <>
            <button className={variants[variant]} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default Button