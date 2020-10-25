class Stack {
    constructor() {
        this._size = 0;
        this._storage = {}
    }

    push(value) {
        const size = ++this._size;
        this._storage[size] = value;
    }

    pop() {
        const size = this._size;
         if (size) {
            const deletedData = this._storage[size];
            this._size-- ;
            return deletedData;
         }
    }
}