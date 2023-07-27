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

// DAY 2
// Menentukan nilai raport berdasarkan nilai angka 

const result = [70, 89, 98, 45, 76, 34, 50,113, -2]
let raport = () => {
for (let i = 0; i < result.length; i++){
    let indexResult = result[i]
    let nilaiResult =''
    if (indexResult <= 64 && indexResult >= 0){
        nilaiResult = 'C'
    }else if (indexResult <= 74 && indexResult >= 65){
        nilaiResult = 'B'
    }else if(indexResult <= 84 && indexResult >= 75){
        nilaiResult = 'B+'
    }else if(indexResult <= 100 && indexResult >= 85){
        nilaiResult = 'A'
    }
     else {
        nilaiResult = 'Nilai tidak terdaftar'
    }

    const kelulusan = nilaiResult === 'A' ||
     nilaiResult === 'B+' || nilaiResult === 'B' || nilaiResult === 'c' ? "LULUS" : "TIDAK LULUS" 
    console.log(`student ${i +1} = ${indexResult} atau ${nilaiResult} dan dinyatakan : 
    ${kelulusan}`)
   
}}
raport()

/*
output :
student 1 = 70 atau B dan dinyatakan : LULUS
student 2 = 89 atau A dan dinyatakan : LULUS
student 3 = 98 atau A dan dinyatakan :  LULUS
student 4 = 45 atau C dan dinyatakan : TIDAK LULUS
student 5 = 76 atau B+ dan dinyatakan : LULUS
student 6 = 34 atau C dan dinyatakan : TIDAK LULUS
student 7 = 50 atau C dan dinyatakan : TIDAK LULUS
student 8 = 113 atau Nilai tidak terdaftar dan dinyatakan : TIDAK LULUS
student 9 = -2 atau Nilai tidak terdaftar dan dinyatakan : TIDAK LULUS
*/