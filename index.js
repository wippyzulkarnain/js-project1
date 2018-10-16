let a=3
let b=7
let c=12

// Level 0
console.log("Level 0")
console.log("a = ",a)
console.log("b = ",b)
console.log("c = ",c)

// Level 1
console.log("Level 1")
console.log("a+b+c = ",a+b+c)
console.log("a-b-c = ",a-b-c)
console.log("a*b*c = ",a*b*c)
console.log("a/b = ",a/b)
console.log("b%a = ",b%a)

// Level 2
console.log("Level 2")
let d = "lala"
let e = "baba"
let f = true;
let g = -83
let h = 3903929
console.log("d = ",d)
console.log("e = ",e)
console.log("f = ",f)
console.log("g = ",g)
console.log("h = ",h)

// Level 3
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr_combined = arr1.concat(arr2)
console.log("array 1 = ",arr1)
console.log("array 2 = ",arr2)
console.log("array 1 + array 2 = ",arr_combined)
arr_combined.push(7)
console.log("menambahkan angka ke dalam array ",arr_combined)
arr_combined.pop(7)
console.log("menghilangkan angka dari array ",arr_combined)
let i =1
for (i=1 ; i <5 ; i++){
    let x=arr_combined.length-1
    arr_combined.push(arr_combined[x]+1)
}
console.log("menanmbahkan data ke dalam array dengan looping : ",arr_combined)
