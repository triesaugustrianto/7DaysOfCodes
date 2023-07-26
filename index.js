// DAY 1
// Memfilter Sebuah Kalimat Tanpa Huruf Vokal

let kata = 'hallo hari ini saya belajar filter'
let simpanHuruf = ''
let vokal = 'aiueo'.split('')
for(let i = 0; i <kata.length; i++){
    if(vokal.indexOf(kata[i]) !== -1){
        continue
    } else {
        simpanHuruf += kata[i]
        }
    
}
console.log(simpanHuruf)
/*
output : 
hll hr n sy bljr fltr
*/

//---------cara ringkas-----------
console.log(
    kata.split('')
    .filter((c) => vokal.indexOf(c) === -1)
    .join('')
)
/*
output : 
hll hr n sy bljr fltr
*/