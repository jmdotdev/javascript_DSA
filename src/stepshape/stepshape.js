function stepshape(num) {
 if(num>0){
    for (let i = 0; i < num; i++) {
        let hash = '';
    
        for (let j = 0; j < num; j++) {
          if (j <= i) {
              hash += '#';
          } else {
              hash += ' ';
          }
        }
    
        console.log(hash);
      }
 }
 else{
    console.log('number must be positive');
 }
  }
  

stepshape(5)
