module.exports = function check(str, bracketsConfig) {
  let allBrackets = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
    for (let oneBracket of str) {
      let bracketsInd = allBrackets.indexOf(oneBracket)
      if (bracketsInd % 2 === 0) {
        if (oneBracket === allBrackets[bracketsInd + 1] && stack[stack.length - 1] === bracketsInd){
          stack.pop();
        } else if (oneBracket === allBrackets[bracketsInd + 1] && stack[stack.length - 1] !== bracketsInd) {
          stack.push(bracketsInd)
        } else {
          stack.push(bracketsInd)
        }
      } else {
          if (stack.pop() !== bracketsInd-1){
            return false;
          }
      }
    }
  return stack.length === 0;
}
