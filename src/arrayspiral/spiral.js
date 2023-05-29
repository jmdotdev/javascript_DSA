function spiralarray(n) {
    const spiral = Array.from(Array(n), () => Array(n));
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Fill top row
      for (let i = startCol; i <= endCol; i++) {
        spiral[startRow][i] = counter++;
      }
      startRow++;
  
      // Fill right column
      for (let i = startRow; i <= endRow; i++) {
        spiral[i][endCol] = counter++;
      }
      endCol--;
  
      // Fill bottom row
      for (let i = endCol; i >= startCol; i--) {
        spiral[endRow][i] = counter++;
      }
      endRow--;
  
      // Fill left column
      for (let i = endRow; i >= startRow; i--) {
        spiral[i][startCol] = counter++;
      }
      startCol++;
    }
  
    return spiral;
  }
  
  // Example usage:
  const size = 5;
  const spiralArray = spiralarray(size);
  console.log(spiralArray);
  