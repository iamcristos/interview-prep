function isBalanced(s) {
   const bracketArr = s.split('')
    const cacheBracket = {
        '{':'}',
        '[': ']',
        '(': ')'
    }
    const arrStore = []
    for (let i = 0; i< bracketArr.length; i++) {
        if(bracketArr[i] === '{' || bracketArr[i] === '[' || bracketArr[i] === '(') {
            arrStore.push(bracketArr[i])
        } else {
            const oppBracket = arrStore.pop()
            if(bracketArr[i] !== cacheBracket[oppBracket] ) {
               return 'NO'
            }
        }
    }
    if(arrStore.length) {
        return 'NO'
    }
    return 'YES'
   }