
// promise 

// pending // resolve , reject 

let pro = new Promise(function (resolve, reject) {
    let x = 10
    let y = 10

    if(x == y){
        resolve('I am solved')
    }
    else {
        reject('I am rejected')
    }
})

// pro.then(function(val1){
//     console.log(val1)
// },function(val2){
//     console.log(val2)
// })

// pro.then(function(val1){
//     console.log(val1)
//     return 11

// })
// .then(function(val3){
//     console.log(val3)
// })
// .catch(function(val2){
//     console.log(val2)
// })