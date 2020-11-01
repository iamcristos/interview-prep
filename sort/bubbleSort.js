function bubbleSort(data) {
    let swap;
    let length = data.length - 1
    do {
        swap = false;
        for (let i = 0; i < length; i++) {
           if(data[i] < data[i+1]) {
            const temp = data[i]
            data[i] = data[i+1]
            data[i+1] = temp
            swap = true
           }
        }
    } while (swap)
    return data;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));