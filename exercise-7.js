//Soal 1
console.log("\nSoal 1" );

for(var rows1=5; rows1>=0; rows1--){
    var count1=""; 
    count1 = count1+"*"
    console.log(count1);
}

//Soal 2
console.log("\nSoal 2" );
for(var rows2=5; rows2>=0; rows2--){
    var count2="";
    for(var rows2_1=1; rows2_1<=5; rows2_1++){  
    count2=count2+"*";
    }
    console.log(count2);
}

//Soal 3
console.log("\nSoal 3" );

for(var rows3=5; rows3>=0; rows3--){
    var count3="";
   for (var rows3new = 5; rows3new>=rows3; rows3new--){
    count3 = count3 + "*";
   }
    console.log(count3);
}