const connection = require('../connection/TemubukuConnection');
const Format = require('../tools/format');

module.exports.getTemubuku = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let temubuku = await connection.getTemubuku(req.query);

            if(!temubuku.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            temubuku = temubuku.bindings.map((buku)=>Format(buku));

            if(req.params.id){
                let buku = temubuku.filter((buku)=>{
                    return buku.id == req.params.id
                });
                res.status(200).json({
                    data:buku[0],
                    message: buku.length ? 'Data buku berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: temubuku,
                    message: "Menampilkan semua buku"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }