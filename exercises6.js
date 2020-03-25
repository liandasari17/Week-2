/* Nomor 1
*/
console.log('LOOPING PERTAMA');
pertama = 2;
while (pertama <= 20){
  console.log(pertama + ' - I love coding');
  pertama = pertama + 2;
}
console.log('LOOPING KEDUA');
kedua = 20;
while (kedua >= 2) {
  console.log(kedua + ' - I will become fullstack developer');
  kedua = kedua - 2;
}

/* Nomor 2
*/
console.log('LOOPING PERTAMA');
pertama = 1;
while (pertama <= 20){
  console.log(pertama + ' - I love coding');
  pertama++;
}
console.log('LOOPING KEDUA');
kedua = 20;
while (kedua >= 2) {
  console.log(kedua + ' - I will become fullstack developer');
  kedua--;
}

/* Nomor 3
*/
var i = 0
console.log('ganjil - genap')
while (i < 100) {
    i++
    if(i % 2 == 0) {
        console.log("Counter sekarang " + i)
        console.log(`${'output'}
        ${'genap'}`)
    } else {
        console.log("Counter sekarang " + i)
        console.log(`${'output'}
        ${'ganjil'}`)

    }
}

var f = 1
while (f < 100) {
    f = f+2
    if (f % 3 == 0) {
    console.log('Counter sekarang ' + f)
    console.log(`${'output'}
    ${f + " kelipatan 3"}`)    
    } else {
        console.log('Counter sekarang ' + f)
        console.log(`${'output'}
        ${"''"}`) 
    }
}

var y = 1
while (y < 100) {
    y = y + 5
    if (y % 6 == 0) {
    console.log('Counter sekarang ' + y)
    console.log(`${'output'}
    ${y + ' kelipatan 6'}`)    
    } else {
        console.log('Counter sekarang ' + y)
        console.log(`${'output'}
        ${"''"}`)     
    }
}

var x = 1
while (x < 100) {
    x = x +9
    if (x % 10 == 0) {
        console.log('Counter sekarang ' + x)
        console.log(`${'output'}
        ${x + ' kelipatan 10'}`)    
        } else {
            console.log('Counter sekarang ' + x)
            console.log(`${'output'}
            ${"''"}`)  
    }
}