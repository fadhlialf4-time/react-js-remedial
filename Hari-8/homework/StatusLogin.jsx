// Nomor 1
function StatusLogin() {
    const isLoggedIn = false;

    let message;
    if (isLoggedIn) {
        message = <h2>Selamat datang kembali</h2>
    } else {
        message = <h2>Silahkan login terlebih dahulu</h2>
    }

    return ( 
    <div>{message}</div>
    )
}

export default StatusLogin