const readline = require('readline');
const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Kelipatan');
rline.question('Masukkan angka? ', function (number) {
    if (number == '') {
        console.log('angka harus diisi!');
        rline.close();
    }
    let hasil = "";
    for (let index = 1; index <= number; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            hasil += "fizzbuzzz,";
        }
        else if( index % 3 == 0){
            hasil += "fizz,";
        }
        else if( index % 5 == 0   ){
            hasil += "buzz,";
            
        }else{
            hasil += index + ",";
        }
    }
    console.log(hasil);
    rline.close();
});

rline.on('close', function () {
  console.log('\nTerimakasih !!!');
  process.exit(0);
});