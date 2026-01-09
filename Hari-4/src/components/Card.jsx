// Nomor 3
function Card(props){
    return(
        <>
        <div style={{
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '10px',
            marginBottom: '10px',
        }}>
            {props.children}
        </div>
        </>
    )
}

export default Card;