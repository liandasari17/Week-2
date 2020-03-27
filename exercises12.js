function konversiMenit(menit) {
    i= Math.floor(menit/60);
    p= menit%60;
    if (p < 10) {
      return i+':0' +p
    } else {
    return i +':'+ p
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00