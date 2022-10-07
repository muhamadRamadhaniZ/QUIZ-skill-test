let data = [5, 4, 9, 10, 60];
let max = data[0];
let min = data[0];

for (let index = 0; index < data.length; index++) {
    if (data[index] < min) {
        min = data[index];
    }   

    if (data[index] > max) {
        max = data[index];
    }
    
}
console.log(`Nilai terbesar ${max}, Nilai terkecil : ${min}`)