function mergeSort (list){
// get the length
const len = list.length;
console.log(len, list)

if (len < 2) {
    return list
}
// get the middle
const middle = Math.ceil(len / 2);
// divide it into half
const leftHalf = list.slice(0, middle)
const rightHalf = list.slice(middle, len)
// get left and right halfs
const left = mergeSort(leftHalf);
const right = mergeSort(rightHalf);
//  recursively call left and right
// return the merge algorithm
return merge(left, right);
}

function merge(left, right){
    console.log(left, right)
    const sorted = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    while(left.length) {
        sorted.push(left.shift())
    }
    while (right.length) {
        sorted.push(right.shift())
    }
    return sorted;
}

const list = [4, 2, 3, 1, 5]

const sorted = mergeSort(list)

console.log(sorted)