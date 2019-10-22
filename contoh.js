/* 
Masukkan nama karakter
Pilih salah satu peran sebagai Kstria, Tabib, ataupun Penyihir
*/ 

var nama = "fajar";
var peran = "TABIB";

if (nama === ""){
    console.log('"Nama harus diisi!"');
}
else if (peran === ""){
    console.log(
        "Halo " + nama + ", " + "Pilih peranmu untuk memulai game!"
        );
}
else if(peran === "Ksatria") {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`
    );
}
else if(peran.toLowerCase === 'tabib') {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`
    );
}
else if(nama !== "" && peran !== "" || peran === Penyihir) {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`
    );
}
    else {
        console.log('Peraa')
    }
