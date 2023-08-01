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

//DAY 3
// Menghitung jumlah huruf besar dan kecil pada kalimat

const kalimat = "haLo hARi iNi sAya belAjAR NodeJS"

function countChar(kalimat) {
    let hrfBesar = 0
    let hrfKecil = 0
    for (const c of kalimat) {
        if(c === c.toLowerCase() && c !== ' '){
            hrfKecil++
        }else if(c === c.toUpperCase() && c !== ' '){
            hrfBesar++
        }
    }
    return [hrfBesar, hrfKecil]
}

const [hrfBesar, hrfKecil] = countChar(kalimat)
console.log(`huruf kecil : ${hrfKecil}`)
console.log(`huruf besar : ${hrfBesar}`)

/*
output :
huruf kecil : 17
huruf besar : 11
*/

//DAY 4 --------------------
// menentuka uang pecahan yang digunakan dalam nominal tertentu

const pecahan = [100,50,20,10,5,2,1]
const jumlah =[0,0,0,0,0,0,0]
let nominal = 467
const checkPecahan = () => {

    for(let i = 0; i< pecahan.length; i++) {
        while(nominal - pecahan[i] >= 0){
            nominal = nominal - pecahan[i]
            jumlah[i]++
        }
    }

    pecahan.forEach((item, index) => {
        console.log(item," : "+jumlah[index])
    })
}
checkPecahan(nominal)

/*
output :
100  : 4
50  : 1
20  : 0
10  : 1
5  : 1
2  : 1
1  : 0 
*/

//DAY 5 ------------------
// balik sebuah kalimat "hari ini kita belajar"

let kalimat5 = "hari ini kita belajar"

// pakai function javascript--------
function reverseString(str) {
   let hasil = str.split('')
    .reverse()
    .join('')
    return hasil
}
console.log('dengan function reverse :')
console.log(reverseString(kalimat5))

// pakai algoritma manual--------
function reverseManual(str) {
    str = str.split('')
    let result = []
    for (let i = str.length; i >= 0; i--){
        result.push(str[i])
    }   
    return result.join('')
}

console.log('dengan algoritma manual :')
console.log(reverseManual(kalimat5))

/*
output : 
dengan function reverse :
rajaleb atik ini irah
dengan algoritma manual :
rajaleb atik ini irah
*/

//cek palindrom kalimat = kasur rusak
//ya atau tidak

let kataPalindrom = 'race car'
function reverseString(str) {
    str = str.split('')
    str.reverse()
    joinStr = str.join('')
    
    return joinStr
}

function palindromCheck(s) {
    if (s.split(' ').join('') === reverseString(s).split(' ').join('')){
        return 'kalimat : '+s +', merupakan palindrom'
    } else {
        return 'kalimat : '+s +', bukan palindrom'
    }
}

console.log(palindromCheck(kataPalindrom))

/*
output : 
kalimat : race car, merupakan palindrom 
*/


//DAY 7---------------
// membandikan semua value dua array di index yang sama
let arr1 = [1,3,6]
let arr2 = [2,3,4]


function compareTriplets(a, b) {
    let alice = [0]
    let bob = [0]
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice[0]++
        } else if(a[i] < b[i]){
            bob[0]++
        } else {
            
        }
    }
    return [alice, bob]
}

let resultArr = compareTriplets(arr1,arr2)
const [alice, bob] = resultArr
console.log('Skor alice : ' +alice)
console.log('Skor bob : ' +bob)

/*
output : 
Skor alice : 1
Skor bob : 1
*/