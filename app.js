class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.Head = null;
        this.length = 0;
    }

    // 1. Insert new node to the start of the list.
    append(data) {
        this.Head = new Node(data, this.Head);
        this.length++;
    }
    // 2. Insert new node to the end of the list.
    prepend(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.Head) {
            this.Head = node;
        } else {
            current = this.Head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.length++;
    }
    
    // 3. Print the length of the list.
    size() {
        console.log(this.length);
    }

    // 4. Prints the first node in the list.
    head() {
        console.log(this.Head);
    }

    // 5. Prints the last node in the list.
    tail() {
        let current = this.Head;
        while (current) {
            if (!current.next) console.log(current);
            current = current.next;
        }
    }
    // Print every node in the list.
    printListData() {
        let current = this.Head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const ll = new LinkedList();

ll.append(200);
ll.append(400);
ll.prepend(500);

ll.head();