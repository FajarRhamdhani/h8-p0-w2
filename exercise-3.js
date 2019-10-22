/* 
Masukkan nama karakter
Pilih salah satu peran sebagai Ksatria, Tabib, ataupun Penyihir
*/ 

var nama = "";
var peran = "";


if (nama === "" && peran === ""){
    console.log(
        '"Isi nama dan peran anda!"'
        );
}
else if (nama === "" && peran !== "") {
    console.log(
        '"Nama harus diisi!"'
        );
}
else if (nama !== "" && peran === ""){
    console.log(
        "Halo " + nama + ", " + "Pilih peranmu untuk memulai game!"
        );
}
else if((nama !== "")  && (peran !== "Ksatria") && (peran !== "Tabib") && (peran !== "Penyihir")) {
    console.log(
        `"Halo ${nama}, pilih salah satu peran yang tersedia."`
    );
}
else if(nama !== "" && peran === "Ksatria") {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`
    );
}
else if(nama !== "" && peran === "Tabib") {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`
    );
}
else if(nama !== "" && peran === "Penyihir") {
    console.log(
        `"Selamat datang di Dunia Proxytia, ${nama}"
"Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`
    );
}