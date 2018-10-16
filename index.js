let a=3
let b=7
let c=12

// Level 0
console.log("Level 0")
console.log("a = ",a)
console.log("b = ",b)
console.log("c = ",c)

// Level 1
console.log("")
console.log("Level 1")
console.log("a+b+c = ",a+b+c)
console.log("a-b-c = ",a-b-c)
console.log("a*b*c = ",a*b*c)
console.log("a/b = ",a/b)
console.log("b%a = ",b%a)

// Level 2
console.log("")
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
console.log("")
console.log("Level 3")
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

// Level 4
console.log("")
console.log("Level 4")
const sentenceA= "My Name is"
const sentenceB= "Wippy Zulkarnain"
console.log(sentenceA)
console.log(sentenceB)

// Level 5
console.log("")
console.log("Level 5")
const sentenceC= sentenceA+" "+sentenceB
console.log(sentenceC)
const sentenceD=`${sentenceA} ${sentenceB}`
console.log(sentenceD)

// Level 6
console.log("")
console.log("Level 6")
let sentenceE=sentenceD.toUpperCase()
console.log(sentenceE)
let sentenceF=sentenceE.toLowerCase()
console.log(sentenceF)

// Level 7
console.log("")
console.log("Level 7")
let sentenceG= "The WorlD iS NOT enOUGH"
console.log(sentenceG)

function titleCase(str) {
str = str.toLowerCase().split(' ');
for (i=0 ; i<str.length ; i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1) 
}
return str = str.join(' ')
}
console.log("Proper Title Case : ",titleCase(sentenceG))

// Level 8 & 9
console.log("")
console.log("Level 8 & 9")
console.log("a = ",a)
console.log("b = ",b)
if (a < b){
    console.log(a+" is smaller than "+b)
}
else if (a >  b){
    console.log(a+' is larger than '+b)
}
else{
    console.log(a+' is equal to '+b)

}

// Level 10
console.log("")
console.log("Level 10")
console.log("a = ",a)
console.log("is "+a+" equal to 10?")
let num5 = (a == 10) ? "true" : "false"
console.log(num5)

// Level 11
console.log("")
console.log("Level 11")

let num6 = ( a< 5 && b<10)
let num7 = ( a< 5 && b > 10)
console.log(num6)
console.log(num7)
