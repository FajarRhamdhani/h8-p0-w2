/* 
Masukkan nama karakter
Pilih salah satu peran sebagai Kstria, Tabib, ataupun Penyihir
*/ 

/* var nama = "fajar";
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
*/

var baju = 0
var totalBaju = 20

while(baju < 20){
    baju = baju + 1;
    console.log(`${baju} sudah diMasukkan Baju`);
}
console.log('mesin nyala');


// var coloum=0;
// for(rows2=1; rows2<=5; rows2++){
//     for(rows2_1=1; rows2_1<=rows2; rows2_1++){
//         console.log(rows2_1)  
//         coloum=coloum+rows2_1;
//     }
//     console.log(coloum);
// }

for(i=2; i<=5; i++){
    var tes="a";
    for(a=0; a>=i; a++){
    tes= tes+ "*";
    }
    console.log(tes);
}