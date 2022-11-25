// objects

const data = {
    name : 'Deepak',
    surname: 'Sharma',
    mobileNo: 8525518614,
    address: {
        Plotno : 41,
        Street : 'jal mahal',
        City : 'jaipur'
    }
}


console.log(data.name)
console.log(data.surname)


Object.keys(data).forEach((keys) => {
    console.log(keys + ':' + data[keys])
});


// Strings 

const a = 'hello world'
const b = '     bye world'

console.log(a + '====>' + b)

console.log(a.concat(b)); // concatination

console.log(b.replace('bye','NO')) // replacing

console.log(b.trim()); // trim method

console.log(a.charAt(3)); // Character at

// Boolean


const No1 = 5
const No2 =10

if (No1 > No2){
    console.log(false)
} 

else console.log(true)



