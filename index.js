const readline = require('readline');
const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('selamat datang di game werewolf');
rline.question('Masukkan nama kamu? ', function (name) {
    if (name == '') {
        console.log('Nama harus diisi!');
        rline.close();
    }
  rline.question('Pilih Peranmu untuk memulai game : \npenyihir, \nguard \natau werewolf :', function (role) {
    if (role == 'penyihir' || role == 'guard' || role == 'werewolf') {
        console.log(`${name} kamu bermain sebagai ${role}`);
        rline.close();
    }
    else{
        console.log('Pilih peran untuk memulai game');
        rline.close();
    }
  });
});

rline.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});