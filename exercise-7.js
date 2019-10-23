
console.log("\nSoal 1" );
for(rows1=1; rows1<=5; rows1++){
    console.log("*");
}

console.log("\nSoal 2" );
for(rows2=1; rows2<=5; rows2++){
    var coloum="";
    for(rows2_1=1; rows2_1<=5; rows2_1++){  
    coloum=coloum+"*";
    }
    console.log(coloum);
}

console.log("\nSoal 3" );
for(rows3=1; rows3<=5; rows3++){
   var word="";
   for (var rows3new = 0; rows3new<rows3; rows3new++){
       word = word + "*";
   }
    console.log(word);
}

