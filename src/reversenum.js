function reverseInteger(num) {
    let reversedNum = 0;
    while (num !== 0) {
      reversedNum = reversedNum * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversedNum;
  }
  

console.log(reverseInteger(45123))