function chunkArray(array, chunkSize) {
    const result = [];
    let index = 0;
  
    while (index < array.length) {
      result.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }
  
    return result;
  }

  
arr1=[1,2,3,4,5,6,7,8]
chunkSize1=3
console.log(chunkArray(arr1,chunkSize1))