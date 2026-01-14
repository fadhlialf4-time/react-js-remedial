function InputExample() {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert('Enter ditekan!')
        }
    }

    return (
        <input 
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="TekanEnter"
        />
    )
}

export default InputExample