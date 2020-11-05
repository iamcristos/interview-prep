class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(head=null) {
        this.head = head;
        this.size = head ? 1 : 0
    }

    addNode(value) {
        if(!value) throw new Error('value is required')
        let current = this.head;
        if(!current) {
            current = new Node(value);
        } else {
            while(current.next) {
                current = current.next
            }
            current.next = new Node(value);
        }
        this.size += 1
        return this;
    }

    addNodeIndex(value, index) {
        if(this.size <= index + 1) throw new Error('Use addNode method')
        let current = this.head;
        if (index === 0) {
            this.head = new Node(value);
            this.head.next = current;
        }else {
            let count = 0;
            while(current.next && count !== index) {
                current = current.next;
                count += 1;
            }
            current.next = new Node(value)
        }
        this.size += 1
        return this;
    }

    search(value) {
        let current = this.head;
        if(value === current.value) {
            return current
        }
        while(current.next) {
            if(current.value === value) {
                return current
            }
            current = current.next
        }
         if(value === current.value) {
            return current
        }
        return 'item not found'
    }

    deleteNode(value) {
        let current = this.head;
        let previous = current;
        if(value === current.value) {
           if(current.next) {
               this.head = current.next
           }else {
               this.head = null
           }
           return this;
        }
        while(current.next) {
            if(current.value === value) {
                previous.next = current.next
                return this;
            }
            previous = current
            current = current.next
        }
         if(value === current.value) {
             current = null
            return this;
        }
        return 'item not found'
    }
}

const node1 = new Node(10);
const linked = new LinkedList(node1);

linked.addNode(20).addNode(30).addNode(40).addNode(6)

linked.addNode(1)
linked.addNodeIndex(5, 0)

console.log(linked.deleteNode(400),linked.search(40))