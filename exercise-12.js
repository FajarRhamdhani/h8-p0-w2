function konversiMenit(menit) {
    var jam = Math.floor(menit/60);
    var minute = menit%60;
    var minut = menit;

    if(minute<10) {
        return `${jam}:0${minute}`;
    }
    else if(minute>10){
        return `${jam}:${minute}`;
    }
    else if(minut<60){
        return  `0:${minut}`;
    }

}
  // TEST CASES
 console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  
