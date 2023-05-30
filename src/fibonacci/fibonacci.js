const prompt = require('prompt-sync')();
function fibonacci(){
    const number=parseInt(prompt('enter fibonnaci number:'))
    let n1=0;
    let n2=1;
    let nextnum;
    console.log('fibonacci series')

    for(let i=1;i<=number;i++){
        console.log(n1)  
        nextnum=n1+n2;
        n1=n2;
        n2=nextnum;
        
    }
    


}

fibonacci()
