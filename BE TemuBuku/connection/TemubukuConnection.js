const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getTemubuku = async(param)=>{
    // Query
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        SELECT ?id ?judul ?kategori ?penulis ?penerbit ?tahun_terbit ?harga ?stok ?halaman ?isbn ?urlFoto
        WHERE{
            ?sub rdf:type data:buku
            OPTIONAL {?sub data:id ?id.}
            OPTIONAL {?sub data:judul ?judul.}
            OPTIONAL {?sub data:kategori ?kategori.}
            OPTIONAL {?sub data:penulis ?penulis.}
            OPTIONAL {?sub data:penerbit ?penerbit.}
            OPTIONAL {?sub data:tahun_terbit ?tahun_terbit.}
            OPTIONAL {?sub data:harga ?harga.}
            OPTIONAL {?sub data:stok ?stok.}
            OPTIONAL {?sub data:halaman ?halaman.}
            OPTIONAL {?sub data:isbn ?isbn.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?judul, "${param.judul ? param.judul : ''}", "i") && (?penulis, "${param.penulis ? param.penulis : ''}", "i") && (?penerbit, "${param.penerbit ? param.penerbit : ''}", "i") && (?kategori, "${param.kategori ? param.kategori : ''}", "i")
        }`
    
    };
    try{
        const {data} = await axios(`${DATA_URL}/Temubuku/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        console.log(data.results);
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports = exports;
