function mostappearing(str) {
    let count = [];
    
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      count[char] = count[char] + 1 || 1;
    }
  

    let mostappearing = '';
    let hcount = 0;
    for (let char in count) {
      if (count[char] > hcount) {
        mostappearing = char;
        hcount = count[char];
      }
    }
  
    return mostappearing;
  }
  

let str = '12345666776';
 console.log(mostappearing(str))

  
