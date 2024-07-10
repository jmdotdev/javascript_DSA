function mergeSortedArrays(arr1, arr2) {
    let mergedSortedArray = [];
    let i= 0;
    let j = 0;
    while(i<arr1.length &&  j<arr2.length){
      if(arr1[i] < arr2[j]){
          mergedSortedArray.push(arr1[i]);
        i++;
      }
      else{
          mergedSortedArray.push(arr2[j]);
          j++;
      }
    }
    console.log(mergedSortedArray.concat(arr1.slice(i)).concat(arr2.slice(j)));
  }
  
  arr1 = [1,3,5,7,9]
  arr2 = [2,4,6,8,10]
  
  console.log(mergeSortedArrays(arr1, arr2));