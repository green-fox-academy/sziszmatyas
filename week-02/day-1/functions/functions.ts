"strict"
export {}

let arrName:number[] = new Array(10)
for (let i =0; i<arrName.length; i++) {
    arrName[i] = i * 2
    console.log(arrName[i])
}