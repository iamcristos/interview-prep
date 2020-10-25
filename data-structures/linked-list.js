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
}

const node1 = new Node(10);
const linked = new LinkedList(node1);

linked.addNode(20).addNode(30).addNode(40).addNode(6)

linked.addNode(1)
linked.addNodeIndex(5, 0)

console.log(linked.size, linked.head)