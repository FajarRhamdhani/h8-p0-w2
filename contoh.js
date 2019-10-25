// /* 
// Masukkan nama karakter
// Pilih salah satu peran sebagai Kstria, Tabib, ataupun Penyihir
// */ 

// /* var nama = "fajar";
// var peran = "TABIB";

// if (nama === ""){
//     console.log('"Nama harus diisi!"');
// }
// else if (peran === ""){
//     console.log(
//         "Halo " + nama + ", " + "Pilih peranmu untuk memulai game!"
//         );
// }
// else if(peran === "Ksatria") {
//     console.log(
//         `"Selamat datang di Dunia Proxytia, ${nama}"
// "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`
//     );
// }
// else if(peran.toLowerCase === 'tabib') {
//     console.log(
//         `"Selamat datang di Dunia Proxytia, ${nama}"
// "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`
//     );
// }
// else if(nama !== "" && peran !== "" || peran === Penyihir) {
//     console.log(
//         `"Selamat datang di Dunia Proxytia, ${nama}"
// "Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`
//     );
// }
//     else {
//         console.log('Peraa')
//     }
// */

// // var baju = 0
// // var totalBaju = 20

// // while(baju < 20){
// //     baju = baju + 1;
// //     console.log(`${baju} sudah diMasukkan Baju`);
// // }
// // console.log('mesin nyala');


// // var coloum=0;
// // for(rows2=1; rows2<=5; rows2++){
// //     for(rows2_1=1; rows2_1<=rows2; rows2_1++){
// //         console.log(rows2_1)  
// //         coloum=coloum+rows2_1;
// //     }
// //     console.log(coloum);
// // }

// for(i=5; i>=0; i--){
//     // // console.log(i%4 + "mod");
//     tes= "";
//     for(a=0; a<=15; a++){
//          if(a=a%2){
//           console.log(tes = tes + "*")
//         }
//         else
//         {
//           console.log(tes + "in")
//         }
//     }
// }
// // console.log(3%2);

// // var a=4;
// // if(a%5) 


// // console.log(hasil);

// var num1 = 5;
// var num2 = 6;
// var kali = 0;

// function calculateMultiply(){
 
//     console.log(kali = num1 * num2);
// }

// var hasil = calculateMultiply();

// console.log(hasil);

//Soal 3
console.log("\nSoal 3" );
for(var rows3=5; rows3>=1; rows3--){
   var count3="";
   for (var rows3new = 0; rows3new<rows3; rows3new++){
    count3 = count3 + "*";
   }
    console.log(count3);
}

// function xo(str) {
//     // you can only write your code here!
//     var totalX="";
//     var totalO="";
//     for(var panjang=str.length; panjang>=0; panjang--){
//        if(str[panjang]==="x"){
//         totalX += "x";
//        }
//        else if(str[panjang]==="o"){
//         totalO += "o";
//        }
//         }
//        if(totalX.length===totalO.length){
//            return true;
//        } 
//        else
//        {
//            return false;
//        }
//   }