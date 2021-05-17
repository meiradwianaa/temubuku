module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "judul": data.judul ? data.judul.value : '',
        "kategori": data.kategori ? data.kategori.value : '',
        "penulis": data.penulis ? data.penulis.value : '',
        "penerbit": data.penerbit ? data.penerbit.value : '',
        "tahun_terbit": data.tahun_terbit ? data.tahun_terbit.value : '',
        "harga": data.harga ? data.harga.value : '',
        "stok": data.stok ? data.stok.value : '',
        "halaman": data.halaman ? data.halaman.value : '',
        "isbn": data.isbn ? data.isbn.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}