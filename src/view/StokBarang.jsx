function StokBarang(props) {
    return (
        <>
        <h1>Stok Barang Toko</h1>
        <div className="border-2 border-black p-4 flex items-center flex-col">
            <p>Nama Barang : {props.judul}</p>
            <p>Stok Barang : {props.stok}</p>
            {props.stok > 0 ? <p className="bg-green-500 p-4 text-white">Tersedia</p> : <p className="bg-red-500 p-4 text-white">Tidak Tersedia</p>}
        </div>
        <div className="border-2 border-black p-4 flex items-center flex-col">
            <p>Nama Barang : {props.judul2}</p>
            <p>Stok Barang : {props.stok2}</p>
            {props.stok2 > 0 ? <p className="bg-green-500 p-4 text-white">Tersedia</p> : <p className="bg-red-500 p-4 text-white">Tidak Tersedia</p>}
        </div>
        </>
    )
}

export default StokBarang