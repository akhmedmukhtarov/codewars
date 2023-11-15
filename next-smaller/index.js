// function findAllPossibleCombinations(str, call) {
//     if (str.length < 2 ) {
//         return str;
//     }
//     const combinationsArray = [];
//     for (let i = 0; i < str.length; i++) {
//         const num = str[i];
//         let remainingNums = str.slice(0, i) + str.slice(i + 1, str.length);
//         if(str.indexOf(num) != i || (call == 1 && num == 0) || (call == 1 && +num > +str[0])) {
//             continue
//         }
//         for (const combination of findAllPossibleCombinations(remainingNums, call + 1)) {
//             const newResult = num + combination
//             combinationsArray.push(newResult);
//         }
//     }
//     return combinationsArray;
// }
// function nextSmaller(n) {
//     const strOfNum = String(n);
//     console.log(strOfNum);
//     const combinations = findAllPossibleCombinations(strOfNum,1);
//     const sortedCombinations = combinations.sort();
//     console.log(sortedCombinations);
//     const isTheSame = sortedCombinations[0] == n;
//     const result = sortedCombinations[sortedCombinations.indexOf(strOfNum) - 1];
//     if (strOfNum.length == 1 || isTheSame || result[0] == 0) {
//         return -1;
//     }
//     return +result;
// }
//  Rewrote due to performance issues
function nextSmaller(n) {
    const digits = String(n).split('');
    let pivotIdx = -1;
    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] > digits[i + 1]) {
        pivotIdx = i;
        break;
      }
    }
  
    if (pivotIdx === -1) {
      return -1; 
    }
  
    let swapIdx = -1;
    for (let i = digits.length - 1; i > pivotIdx; i--) {
      if (digits[i] < digits[pivotIdx]) {
        if (swapIdx === -1 || digits[i] > digits[swapIdx]) {
          swapIdx = i;
        }
      }
    }
  
    if (pivotIdx === 0 && digits[swapIdx] === '0') {
      return -1;
    }
  
    [digits[pivotIdx], digits[swapIdx]] = [digits[swapIdx], digits[pivotIdx]];
  
    const sortedDigits = digits.slice(pivotIdx + 1).sort((a, b) => b - a);
  
    const result = +digits.slice(0, pivotIdx + 1).concat(sortedDigits).join('');
    return result;
  }
