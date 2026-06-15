let CGPA = 7

let myPromise = new Promise((resolve, reject) => {
    if(CGPA > 7){
        console.log("I scored more than 7 CGPA")
        console.log("I scored more than 7 CGPA")
        console.log("I scored more than 7 CGPA")
        console.log("I scored more than 7 CGPA")
        resolve({name : "Shrey", success : true })
        console.log("I scored more than 7 CGPA")
        console.log("I scored more than 7 CGPA")
        console.log("I scored more than 7 CGPA")
    }else{
        console.log("I did not score more than 7 CGPA")
        reject()
    }
})

myPromise
.then((data) => {
    console.log("Promise is resolve")
    console.log(data)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() => {
    console.log("I will run all the time")
})