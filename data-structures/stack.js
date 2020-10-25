class Stack {
    constructor() {
        this._size = 0;
        this._storage = {}
    }

    push(value) {
        const size = ++this._size;
        this._storage[size] = value;
        return this;
    }

    pop() {
        const size = this._size;
         if (size) {
            const deletedData = this._storage[size];
            this._size-- ;
            console.log(deletedData);
        }
        return this
    }
}

const newStack = new Stack()

newStack.push(1).push(10).pop();