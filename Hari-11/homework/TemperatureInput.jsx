// Nomor 1
function TemperatureInput({ label, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input 
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))} 
            />
        </div>
    )
}

export default TemperatureInput