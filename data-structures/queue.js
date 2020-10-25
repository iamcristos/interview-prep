class Queue {
    constructor() {
        this._oldestIndex = 1;
        this.newestIndex = 1;
        this._storage = {};
    }

    enqueue(value) {
        this._storage[this.newestIndex] = value;
        this.newestIndex ++;
    }
    dequeue() {
        if(this._oldestIndex !== this.newestIndex) {
            const deletedData = this._storage[this._oldestIndex];
            delete this._storage[this._oldestIndex];
            this._oldestIndex ++;
            return deletedData;
        }
    }

    size() {
        return this._oldestIndex - this.newestIndex;
    }
}