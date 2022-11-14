let promiseProd = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseProd){
                resolve(task)  
            }else{
                reject("ERROR")
            }
        }, time)
    })
}

export default customFetch;