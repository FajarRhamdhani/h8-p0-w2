//soal 1
console.log("\nSoal 1" );
var loopPertama = 0;
var loopKedua = 22;
var tambah = 2;
var kurang = 2;
var judulPertama = "LOOPING PERTAMA";
var judulKedua = "LOOPING KEDUA";

//soal 1 pertama
console.log("\nSoal 1 pertama" );
console.log(judulPertama);
while(loopPertama < 19){
    loopPertama += tambah;
    console.log(
        `${loopPertama} - I love coding`
        );
}

//soal 1 kedua
console.log("\nSoal 1 kedua" );
console.log(judulKedua);
while(loopKedua > 2){
    loopKedua -= kurang;
    console.log(
        `${loopKedua} - I will become fullstack developer`
        );
}

//soal 2
console.log("\nSoal 2" );

//soal 2 pertama
console.log("\nSoal 2 pertama" );
var judulPertama2 = "LOOPING PERTAMA";
var judulKedua2 = "LOOPING KEDUA";

console.log(judulPertama2);
for(var tambah=1; tambah<=20; tambah++){
    console.log(`${tambah} - I love coding`);
}

//soal 2 kedua
console.log("\nSoal 2 kedua" );
console.log(judulKedua2);
for(var kurang=20; kurang>=1; kurang--){
    console.log(`${kurang} - I will become fullstack developer`);
}

//soal 3
console.log("\nSoal 3" );

console.log("\nSoal 3 pertama dan kedua" );
//soal 3 kedua
for(var i=1; i<=100; i++){
    var print = "";
    if(i % 2 === 0){
        print="GENAP";
    }
    else {
        print="GANJIL";

        
    }
    console.log(print);
}

console.log("\nSoal 3 ketiga" );
//soal 3 ketiga

console.log("\nSoal 3 ketiga & keempat pertambahan 2" );
//pertambahan 2
for(var i=1; i<=100; i=i+2) {
    if(i % 3 === 0){
    console.log(`${i} KELIPATAN 3`);
}
}

console.log("\nSoal 3 ketiga & keempat pertambahan 5" );
//pertambahan 5
for(var i=1; i<=100; i= i+5) {
    if(i % 6 === 0){
    console.log(`${i} KELIPATAN 6`);
}
}

console.log("\nSoal 3 ketiga & keempat pertambahan 9" );
//pertambahan 9
for(var i=1; i<=100; i= i+9) {
    if(i % 10 === 0){
    console.log(`${i} KELIPATAN 10`);
}
}
