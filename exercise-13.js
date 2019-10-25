function xo(str) {
    // you can only write your code here!
    var totalX=0;
    var totalO=0;
    for(var i=0; i<=str.length; i++){
       if(str[i]==="x"){
        totalX = totalX + 1;
       }
       else if(str[i]==="o"){
        totalO = totalO + 1;
       }
      }
       if(totalX===totalO){
           return true;
       } 
       else
       {
           return false;
       
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true