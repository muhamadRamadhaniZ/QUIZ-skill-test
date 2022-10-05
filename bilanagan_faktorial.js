const readline = require('readline');
const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('selamat di perhitungan bilangan faktorial');
rline.question('Masukkan bilanagan? ', function (number) {
    if (number == '') {
        console.log('bilanagan harus diisi!');
        rline.close();
    }
    let hasil = number;
    for (let index = number-1; index > 0; index--) {
        hasil = hasil * index;
    }
    console.log(`hasil faktorial bilangan ${number}! adalah ${hasil}`);
    rline.close();
});

rline.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});