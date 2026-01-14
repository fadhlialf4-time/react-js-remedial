// Nomor 2
function Dashboard() {
    const isLoggedIn = true;
    const unreadMessages = 3

    return (
        <div>
            <h1>
                {isLoggedIn ? "Selamat datang" : "Login terlebih dahulu"}
            </h1>

            {unreadMessages > 0 && (
                <p>Kamu punya {unreadMessages} pesan baru</p>
            )}
        </div>
    )
}

export default Dashboard